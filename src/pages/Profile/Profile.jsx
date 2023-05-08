import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="mx-auto my-16 p-4 text-center border-2 rounded w-fit">
      <h1 className="text-3xl font-bold">Some placeholder title</h1>
      <p className="my-10 text-2xl">Some placeholder text.</p>
      <Link
        className="hover:opacity-80 inline-block p-3 border-2 rounded"
        to="/blog"
      >
        Blog
      </Link>
    </section>
  );
}

export default Profile;
