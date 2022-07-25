import { useEffect, useState } from "react";
import DummyJsonApi from "../lib/dummy-json-api";
import { Post } from "../lib/dummy-json-api/index.types";

const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    DummyJsonApi.getPosts()
      .then((data) => setPosts(data.posts))
      .catch((err) => setError(err));
  }, []);

  return {
    data: posts,
    isLoading: !posts && !error,
    error: error,
  };
};

export default useGetPosts;
