import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Post() {
  const params = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data.posts));
  }, [params.id]);

  return (
    <div className="mt-6">
      <Link
        className="ml-5 hover:opacity-70 hover:underline"
        to=".."
        relative="path"
      >
        &larr; Back to all posts
      </Link>
      {post ? (
        <article className="lg:w-1/5 sm:w-3/5 mt-8 mb-16 mx-8">
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.text}</p>
          <small>{post.date}</small>
          <pre>{post.type}</pre>
        </article>
      ) : (
        <h2 className="m-6">Loading...</h2>
      )}
    </div>
  );
}

export default Post;
