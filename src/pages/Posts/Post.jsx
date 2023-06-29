import { Link, useLocation, useLoaderData } from "react-router-dom";

function Post() {
  const location = useLocation();
  const post = useLoaderData();

  // Checking if location.state exists, then checking for the search/type property; otherwise - ""/"all".
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
        <h2 className="text-center font-bold text-lg mb-2">{post.title}</h2>
        <img className="rounded mb-2" src={post.imageUrl} alt={post.title} />
        <pre className="my-2 bg-secondaryBackground w-fit px-2 rounded">
          {post.type}
        </pre>
        <small>{post.date}</small>
        <p className="mt-2">{post.text}</p>
      </article>
    </div>
  );
}

export default Post;
