import matter from "gray-matter";
import { getAllProjectsData } from "../../lib/api";

export const metadata = {
  title: "Work",
};

export default async function Work() {
  const projects = getAllProjectsData();

  const allProjects = projects
    .map((project) => {
      const { data } = matter(project.fileContent);
      return data;
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <>
      <header className="pb-9">
        <h1 className="text-5xl font-heading tracking-tight mb-4 bg-white inline-block text-transparent bg-clip-text">
          Code. Eat. Sleep. Repeat.
        </h1>

        <p className="text-base">
          Here you can find some of the projects I have been involved in...
        </p>
      </header>

      <ul>
        {allProjects.map((project) => (
          <li key={project.date} className="project">
            <div className="project-content">
              <h2 className="text-lg font-heading font-bold text-white">
                {project.title}
              </h2>
              <div className="text-base leading-7 project-content__description">
                <p>{project.description}</p>
              </div>
              <div>
                {project.tags.map((tag, index) => (
                  <span
                    key={`${project.date}-${tag}-${index}`}
                    className="mr-5 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
