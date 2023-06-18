import { Link, useLocation, useLoaderData } from "react-router-dom";

function Post() {
  const location = useLocation();
  const post = useLoaderData();

  // Checking if location.state exists (and then checking for the search property); otherwise - "".
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="mt-6">
      <Link
        className="ml-5 hover:opacity-70 hover:underline"
        to={`..${search}`}
        relative="path"
      >
        &larr; Back to {type} posts
      </Link>
      <article className="lg:w-1/5 sm:w-3/5 mt-8 mb-16 mx-8">
        <h2>{post.title}</h2>
        <img src={post.imageUrl} alt={post.title} />
        <p>{post.text}</p>
        <small>{post.date}</small>
        <pre>{post.type}</pre>
      </article>
    </div>
  );
}

export default Post;
