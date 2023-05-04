import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const postsArray = posts.map((post) => {
    return (
      <article key={post.id} className="w-3/5 m-4">
        <Link to={`/blog/${post.id}`}>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.text}</p>
          <small>{post.date}</small>
          <pre>{post.type}</pre>
        </Link>
      </article>
    );
  });

  return (
    <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {postsArray}
    </section>
  );
}

export default Blog;
