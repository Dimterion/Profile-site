import { Link, useLoaderData } from "react-router-dom";
import { getProfilePosts } from "../../api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  return getProfilePosts();
}

function ProfilePosts() {
  const posts = useLoaderData();

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

  return (
    <section>
      <h1 className="text-2xl font-bold m-4">Your Posts</h1>
      <article>{postsArray}</article>
    </section>
  );
}

export default ProfilePosts;
