export interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: string;
  user: {
    id: string;
    username: string;
  };
}

export interface PostWithComments extends Post {
  comments: Comment[];
}

export interface Pagination {
  total: number;
  skip: number;
  limit: number;
}

export interface GetPosts extends Pagination {
  posts: Post[];
}

export interface GetComments extends Pagination {
  comments: Comment[];
}

export interface GetPostsWithComments extends Pagination {
  posts: PostWithComments[];
}

export interface CreatePost extends Omit<Post, "id"> {}

export interface UpdatePost extends Partial<Omit<Post, "id">> {}

export interface DeletePost extends Pick<Post, "id"> {}
