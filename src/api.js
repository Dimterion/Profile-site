export async function getPosts() {
  const res = await fetch("/api/posts");
  if (!res.ok) {
    throw {
      message: "Couldn't fetch posts",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.posts;
}
