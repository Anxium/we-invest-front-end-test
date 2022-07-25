import {
  CreatePost,
  GetComments,
  GetPosts,
  GetPostsWithComments,
  Post,
} from "./index.types";

class DummyJsonApi {
  apiUrl = "https://dummyjson.com";

  // As no credentials are needed, we don't need the constructor

  // We can add pagination, but it will take too much time for what we want to do
  async getPosts(): Promise<GetPosts> {
    return fetch(
      `${this.apiUrl}/posts?select=title,body,userId&limit=10`
    ).then<GetPosts>((res) => res.json());
  }

  async getPostsWithComments(): Promise<GetPostsWithComments> {
    const posts = await this.getPosts();
    const postsWithComments = await Promise.all(
      posts.posts.map(async (post) => {
        const comments = await fetch(`${this.apiUrl}/posts/${post.id}/comments`)
          .then<GetComments>((res) => res.json())
          .then((res) => res.comments);
        return { ...post, comments: comments };
      })
    );
    return { ...posts, posts: postsWithComments };
  }

  async createPost(post: CreatePost): Promise<Post> {
    return fetch(`${this.apiUrl}/posts/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then((res) => res.json());
  }

  async deletePost(id: Post["id"]): Promise<boolean> {
    return fetch(`${this.apiUrl}/posts/${id}`, {
      method: "DELETE",
    }).then(() => true);
  }
}

export default new DummyJsonApi();
