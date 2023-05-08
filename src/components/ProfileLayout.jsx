import { Link, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <section>
      <nav className="flex justify-start 	items-baseline my-1 p-2 font-semibold">
        <Link className="mx-1 hover:opacity-80 hover:underline" to="/profile">
          Profile
        </Link>
        <Link
          className="mx-1 hover:opacity-80 hover:underline"
          to="/profile/details"
        >
          Details
        </Link>
        <Link
          className="mx-1 hover:opacity-80 hover:underline"
          to="/profile/comments"
        >
          Comments
        </Link>
      </nav>
      <Outlet />
    </section>
  );
}

export default ProfileLayout;
