import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between 	items-center my-1 p-2 font-semibold border-b-2">
      <Link className="text-lg" to="/">
        @Dimterion
      </Link>
      <nav className="grid grid-cols-2 sm:flex">
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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="login"
        >
          Log In
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
