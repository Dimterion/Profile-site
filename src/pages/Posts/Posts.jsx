import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getPosts } from "../../api";

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts();
      setPosts(data);
    }

    loadPosts();
  }, []);

  const displayedPosts = typeFilter
    ? posts.filter((post) => post.type === typeFilter)
    : posts;

  const postsArray = displayedPosts.map((post) => (
    <article key={post.id} className="w-3/5 m-4">
      <Link
        to={post.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
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
      <div className="text-center">
        <button
          className={`${
            typeFilter === "thoughts"
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }`}
          onClick={() => setSearchParams({ type: "thoughts" })}
        >
          Thoughts
        </button>
        <button
          className={`${
            typeFilter === "coding"
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }`}
          onClick={() => setSearchParams({ type: "coding" })}
        >
          Coding
        </button>
        <button
          className={`${
            typeFilter === "life"
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }`}
          onClick={() => setSearchParams({ type: "life" })}
        >
          Life
        </button>
        {typeFilter && (
          <button
            className="mx-1 hover:opacity-70 hover:underline"
            onClick={() => setSearchParams({})}
          >
            All posts
          </button>
        )}
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {postsArray}
      </section>
    </div>
  );
}

export default Posts;
