import { defer } from "react-router-dom";
import { getPosts } from "./api";

export function postsLoader() {
  return defer({ posts: getPosts() });
}
