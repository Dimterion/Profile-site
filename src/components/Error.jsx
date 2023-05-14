import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <section className="text-center mt-20">
      <h2 className="text-2xl font-bold mb-6">Error: {error.message}</h2>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </section>
  );
}

export default Error;
