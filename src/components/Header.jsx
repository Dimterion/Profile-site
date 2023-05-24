import { Link, NavLink } from "react-router-dom";

function Header() {
  const isLoggedIn = localStorage.getItem("loggedin");

  function logOut() {
    localStorage.removeItem("loggedin");
  }

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
        {!isLoggedIn ? (
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
        ) : (
          <button
            className="mx-1 hover:opacity-70 hover:underline"
            onClick={logOut}
          >
            Log Out
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
