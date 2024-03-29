import { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";

function ProfilePosts() {
  const dataPromise = useLoaderData();

  function renderPostElements(posts) {
    const postsArray = posts.toReversed().map((post) => (
      <article key={post.id} className="lg:w-3/5 sm:w-3/5 m-4 hover:opacity-70">
        <Link to={post.id}>
          <h2>{post.title}</h2>
          <img className="rounded" src={post.imageUrl} alt={post.title} />
          <small>{post.date}</small>
          <pre>{post.type}</pre>
        </Link>
      </article>
    ));

    return (
      <article className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        {postsArray}
      </article>
    );
  }

  return (
    <section>
      <h1 className="text-2xl font-bold m-4">Your Posts</h1>
      <Suspense fallback={<h2>Loading posts...</h2>}>
        <Await resolve={dataPromise.posts}>{renderPostElements}</Await>
      </Suspense>
    </section>
  );
}

export default ProfilePosts;
