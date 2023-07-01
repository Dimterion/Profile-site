import { defer } from "react-router-dom";
import { getProjects, getPosts, getPost, getProfilePosts } from "./api";
import { requireAuth } from "./utils";

export function projectsLoader() {
  return defer({ projects: getProjects() });
}

export function postsLoader() {
  return defer({ posts: getPosts() });
}

export function postLoader({ params }) {
  return getPost(params.id);
}

export async function profilePostsLoader({ request }) {
  await requireAuth(request);
  return defer({ posts: getProfilePosts() });
}

export async function profilePostLoader({ params, request }) {
  await requireAuth(request);
  return getPost(params.id);
}

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
