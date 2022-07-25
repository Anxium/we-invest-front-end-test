import { useEffect, useState } from "react";
import DummyJsonApi from "../lib/dummy-json-api";
import { PostWithComments } from "../lib/dummy-json-api/index.types";

const useGetPostsWithComments = () => {
  const [posts, setPosts] = useState<PostWithComments[]>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    DummyJsonApi.getPostsWithComments()
      .then((data) => setPosts(data.posts))
      .catch((err) => setError(err));
  }, []);

  return {
    data: posts,
    isLoading: !posts && !error,
    error: error,
  };
};

export default useGetPostsWithComments;
