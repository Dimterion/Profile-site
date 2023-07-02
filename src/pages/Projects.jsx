import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

function Projects() {
  const dataPromise = useLoaderData();

  function renderProjectElements(projects) {
    const projectsArray = projects.map((project) => (
      <article key={project.id} className="w-2/4 m-4">
        <h2>{project.title}</h2>
      </article>
    ));

    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {projectsArray}
      </section>
    );
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-6">
        Here are the projects
      </h1>
      <Suspense fallback={<h2>Loading projects...</h2>}>
        <Await resolve={dataPromise.projects}>{renderProjectElements}</Await>
      </Suspense>
    </>
  );
}

export default Projects;
