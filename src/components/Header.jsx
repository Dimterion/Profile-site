import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between 	items-baseline my-1 p-2 font-semibold border-b-2">
      <Link className="text-lg" to="/">
        @Dimterion
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
