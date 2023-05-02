import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mx-1 lg:mx-5 my-10 text-center">
      <h1 className="text-3xl font-bold">Hey! I{"'"}m Dmitrii</h1>
      <p className="my-10 text-2xl">
        I code, I learn and I do stuff. Then I re-code, re-learn and re-do
        stuff. And then I repeat it all until it works.
      </p>
      <Link className="hover:opacity-80 hover:underline" to="/blog">
        Check out my blog
      </Link>
    </section>
  );
}

export default Home;
