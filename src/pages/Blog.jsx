import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const postsArray = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <img className="w-1/3" src={post.imageUrl} alt={post.title} />
        <p>{post.text}</p>
      </article>
    );
  });

  return <section className="mb-16">{postsArray}</section>;
}

export default Blog;
