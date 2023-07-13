import { NavLink, Outlet } from "react-router-dom";

function AboutLayout() {
  return (
    <section>
      <nav className="flex justify-center 	items-baseline mx-auto my-10 px-4 py-2 font-semibold border-2 rounded w-fit">
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
