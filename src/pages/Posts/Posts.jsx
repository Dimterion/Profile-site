import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Posts() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const displayedPosts = typeFilter
    ? posts.filter((post) => post.type === typeFilter)
    : posts;

  const postsArray = displayedPosts.map((post) => (
    <article key={post.id} className="w-3/5 m-4">
      <Link to={`/blog/${post.id}`}>
        <h2>{post.title}</h2>
        <img src={post.imageUrl} alt={post.title} />
        <p>{post.text}</p>
        <small>{post.date}</small>
        <pre>{post.type}</pre>
      </Link>
    </article>
  ));

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">
        Here are the blog posts
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {postsArray}
      </section>
    </div>
  );
}

export default Posts;
