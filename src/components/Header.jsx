import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const isLoggedIn = localStorage.getItem("loggedin");
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
    <header className="flex justify-between 	items-center p-2 font-semibold border-b-2 bg-secondaryBackground">
      <Link className="text-lg hover:opacity-70" to="/">
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
