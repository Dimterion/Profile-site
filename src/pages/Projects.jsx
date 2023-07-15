import { Suspense } from "react";
import { Await, useSearchParams, useLoaderData } from "react-router-dom";

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  function renderProjectsElements(projects) {
    const displayedProjects = typeFilter
      ? projects.filter((project) => project.type === typeFilter)
      : projects;

    const projectsArray = displayedProjects.map((project) => (
      <article key={project.id} className="w-2/4 m-6">
        <h2 className="text-center font-bold text-lg mb-2">{project.title}</h2>
        <pre className="my-2 bg-secondaryBackground w-fit px-2 rounded">
          {project.type}
        </pre>
        <a
          className="hover:opacity-70 hover:underline cursor-pointer"
          href="https://github.com/Dimterion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </article>
    ));

    return (
      <>
        <div className="text-center border-2 w-fit m-auto p-2 rounded">
          <button
            className={`${
              typeFilter === "react"
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }`}
            onClick={() => setSearchParams({ type: "react" })}
          >
            React
          </button>
          |
          <button
            className={`${
              typeFilter === "javascript"
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }`}
            onClick={() => setSearchParams({ type: "javascript" })}
          >
            JavaScript
          </button>
          {typeFilter && (
            <>
              |
              <button
                className="mx-1 hover:opacity-70 hover:underline"
                onClick={() => setSearchParams({})}
              >
                All projects
              </button>
            </>
          )}
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
          {projectsArray}
        </section>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-6">
        Here are the projects
      </h1>
      <Suspense fallback={<h2>Loading projects...</h2>}>
        <Await resolve={dataPromise.projects}>{renderProjectsElements}</Await>
      </Suspense>
    </>
  );
}

export default Projects;
