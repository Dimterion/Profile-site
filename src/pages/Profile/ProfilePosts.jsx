import { Suspense } from "react";
import { Link, Await, useLoaderData, defer } from "react-router-dom";
import { getProfilePosts } from "../../api";
import { requireAuth } from "../../utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }) {
  await requireAuth(request);
  return defer({ posts: getProfilePosts() });
}

function ProfilePosts() {
  const dataPromise = useLoaderData();

  function renderPostElements(posts) {
    const postsArray = posts.map((post) => (
      <article key={post.id} className="lg:w-1/5 sm:w-3/5 m-4">
        <Link to={post.id}>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} />
          <small>{post.date}</small>
          <pre>{post.type}</pre>
        </Link>
      </article>
    ));

    return <article>{postsArray}</article>;
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
