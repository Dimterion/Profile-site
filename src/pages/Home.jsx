import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mx-6 lg:mx-auto my-16 p-4 text-center border-2 rounded w-fit">
      <h1 className="text-3xl font-bold">Hey! I{"'"}m Dmitrii</h1>
      <p className="my-10 text-2xl">
        I code, I learn and I do stuff. Then I re-code, re-learn and re-do
        stuff. And then I repeat it all until it works.
      </p>
      <Link
        className="hover:opacity-70 inline-block p-3 border-2 rounded"
        to="/blog"
      >
        Check out my blog
      </Link>
    </section>
  );
}

export default Home;
