import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between 	items-baseline my-1 p-2 font-semibold border-b-2">
      <Link className="text-lg hover:opacity-80 hover:underline" to="/">
        @Dimterion
      </Link>
      <nav>
        <Link className="mx-1 hover:opacity-80 hover:underline" to="/blog">
          Blog
        </Link>
        <Link className="mx-1 hover:opacity-80 hover:underline" to="/projects">
          Projects
        </Link>
        <Link className="mx-1 hover:opacity-80 hover:underline" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
