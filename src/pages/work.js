import matter from "gray-matter";
import Head from "next/head";
import { Fragment } from "react";
import { getAllProjectsData } from "../lib/api";

const Work = ({ projects }) => (
  <Fragment>
    <Head>
      <title>Work - Adilson Mandlate | Front end developer</title>
    </Head>

    <header className="pb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-custom-dark-green dark:text-custom-green">
        Work
      </h1>

      <p className="text-sm">Here are some of the things I've built</p>
    </header>

    <ul>
      {projects.map((project) => (
        <li
          key={project.date}
          className="grid grid-cols-project items-center project"
        >
          <div className="project-content">
            <h2 className="uppercase font-semibold text-custom-dark-green dark:text-custom-green">
              {project.title}
            </h2>
            <div className="text-sm leading-6 project-content__description bg-white dark:bg-gray-900">
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
  </Fragment>
);

export async function getStaticProps() {
  const projects = getAllProjectsData();

  const allProjects = projects
    .map((project) => {
      const { data } = matter(project.fileContent);
      return data;
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      projects: allProjects,
    },
  };
}

export default Work;
