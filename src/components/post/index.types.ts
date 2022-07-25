import { Post, PostWithComments } from "../../lib/dummy-json-api/index.types";

export interface PostProps extends PostWithComments {
  deleteFn(id: Post["id"]): Promise<void>;
}
