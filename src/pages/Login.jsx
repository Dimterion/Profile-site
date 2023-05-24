import {
  useLoaderData,
  useNavigation,
  useActionData,
  redirect,
  Form,
} from "react-router-dom";
import { loginUser } from "../api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // eslint-disable-next-line no-unused-vars
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect("/profile");
  } catch (error) {
    return error.message;
  }
}

function Login() {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
    <section className="text-center">
      <h2 className="mt-6 text-2xl font-bold">Sign in to your account</h2>
      {message && <h3 className="mt-6 text-xl font-bold">{message}</h3>}
      {errorMessage && (
        <h3 className="mt-6 text-xl font-bold">{errorMessage}</h3>
      )}
      <Form
        method="post"
        className="flex flex-col w-3/4 max-w-sm mx-auto mt-6"
        replace
      >
        <input
          className="my-2 p-2 text-background rounded"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          className="my-2 p-2 text-background rounded"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button
          disabled={navigation.state === "submitting"}
          className="mt-6 border-2 p-2 rounded hover:opacity-70"
        >
          {navigation.state === "submitting" ? "Logging in..." : "Log In"}
        </button>
      </Form>
    </section>
  );
}

export default Login;
