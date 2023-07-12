import { NavLink, Outlet } from "react-router-dom";

function AboutLayout() {
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
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-1 opacity-60 underline"
              : "mx-1 hover:opacity-70 hover:underline"
          }
          to="contact"
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}

export default AboutLayout;
