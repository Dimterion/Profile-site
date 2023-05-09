import { NavLink, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <section>
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
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="details"
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="comments"
        >
          Comments
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}

export default ProfileLayout;
