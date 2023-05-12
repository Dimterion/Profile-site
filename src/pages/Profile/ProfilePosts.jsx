import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProfilePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/profile/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

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
      {posts.length > 0 ? <div>{postsArray}</div> : <h2>Loading...</h2>}
    </section>
  );
}

export default ProfilePosts;
