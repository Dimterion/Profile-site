import { redirect } from "react-router-dom";
import { loginUser } from "./api";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  }
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/profile";

  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (error) {
    return error.message;
  }
}
