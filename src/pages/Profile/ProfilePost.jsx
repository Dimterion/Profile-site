import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

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
    <>
      <Link
        className="ml-5 hover:opacity-70 hover:underline"
        to=".."
        relative="path"
      >
        &larr; Back to all posts
      </Link>
      <article className="lg:w-2/5 sm:w-3/5 mt-8 mb-16 mx-8">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <img src={post.imageUrl} alt={post.title} />
        <small>{post.date}</small>
        <nav className="flex justify-start 	items-baseline my-3 p-2 font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }
            to="tags"
          >
            Tags
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ post }} />
      </article>
    </>
  );
}

export default ProfilePost;
