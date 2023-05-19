import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [name]: value,
    }));
  }

  return (
    <section className="text-center">
      <h2 className="mt-6 text-2xl font-bold">Sign in to your account</h2>
      {message && <h3 className="mt-6 text-xl font-bold">{message}</h3>}
      <form
        className="flex flex-col w-3/4 max-w-sm mx-auto mt-6"
        onSubmit={handleSubmit}
      >
        <input
          className="my-2 p-2 text-background rounded"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          className="my-2 p-2 text-background rounded"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button className="mt-6 border-2 p-2 rounded hover:opacity-70">
          Log In
        </button>
      </form>
    </section>
  );
}

export default Login;
