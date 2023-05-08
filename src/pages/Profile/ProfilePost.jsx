import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProfilePost() {
  const params = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/profile/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data.posts));
  }, [params.id]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <article className="lg:w-2/5 sm:w-3/5 mt-8 mb-16 mx-8">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <small>{post.date}</small>
      <pre>{post.type}</pre>
    </article>
  );
}

export default ProfilePost;
