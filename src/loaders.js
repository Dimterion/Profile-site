import { defer } from "react-router-dom";
import { getPosts } from "./api";
import { requireAuth } from "./utils";
import { getProfilePosts, getPost } from "./api";

export function postsLoader() {
  return defer({ posts: getPosts() });
}

export function postLoader({ params }) {
  return getPost(params.id);
}

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function profilePostsLoader({ request }) {
  await requireAuth(request);
  return defer({ posts: getProfilePosts() });
}

export async function profilePostLoader({ params, request }) {
  await requireAuth(request);
  return getPost(params.id);
}
