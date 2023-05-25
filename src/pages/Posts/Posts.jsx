import { useState, Suspense } from "react";
import {
  Link,
  Await,
  useSearchParams,
  useLoaderData,
  defer,
} from "react-router-dom";
import { getPosts } from "../../api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  return defer({ posts: getPosts() });
}

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  if (error) {
    return <h2>There was an : {error.message}.</h2>;
  }

  function renderPostElements(posts) {
    const displayedPosts = typeFilter
      ? posts.filter((post) => post.type === typeFilter)
      : posts;

    const postsArray = displayedPosts.map((post) => (
      <article key={post.id} className="w-3/5 m-4">
        <Link
          to={post.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
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
      <>
        <div className="text-center border-2 w-fit m-auto px-2 py-1">
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
      </>
    );
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">
        Here are the blog posts
      </h1>
      <Suspense fallback={<h2>Loading posts...</h2>}>
        <Await resolve={dataPromise.posts}>{renderPostElements}</Await>
      </Suspense>
    </div>
  );
}

export default Posts;
