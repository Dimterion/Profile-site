import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Page was not found.</h2>
      <Link className="underline hover:opacity-70" to="/">
        Back to the Home page
      </Link>
    </section>
  );
}

export default NotFound;
