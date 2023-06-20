import { Suspense } from "react";
import { Link, Await, useSearchParams, useLoaderData } from "react-router-dom";

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  function renderPostElements(posts) {
    const displayedPosts = typeFilter
      ? posts.filter((post) => post.type === typeFilter)
      : posts;

    const postsArray = displayedPosts.map((post) => (
      <article key={post.id} className="w-2/4 m-4 hover:opacity-90">
        <Link
          to={post.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <h2 className="text-center font-bold text-lg mb-2">{post.title}</h2>
          <img className="rounded" src={post.imageUrl} alt={post.title} />
          <pre className="mt-2 bg-secondaryBackground w-fit px-2 rounded">
            {post.type}
          </pre>
        </Link>
      </article>
    ));

    return (
      <>
        <div className="text-center border-2 w-fit m-auto px-2 py-1 rounded">
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
          |
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
          |
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
            <>
              |
              <button
                className="mx-1 hover:opacity-70 hover:underline"
                onClick={() => setSearchParams({})}
              >
                All posts
              </button>
            </>
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
