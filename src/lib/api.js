import fs from "fs";
import { join } from "path";

const POST_DIR = join(process.cwd(), "src", "posts");
const PROJECTS_DIR = join(process.cwd(), "src", "projects");

const getSlugs = (dir) => {
  return fs.readdirSync(dir);
};

const getAllPosts = (dir = POST_DIR) => {
  const slugs = getSlugs(dir);
  return slugs.map((slug) => slug.replace(/\.mdx?$/, ""));
};

const getPostBySlug = (slug) => {
  if (!slug) {
    return false;
  }

  const fullPath = join(POST_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  return fileContent;
};

const getAllPostsData = () => {
  return getAllPosts().map((slug) => {
    const fullPath = join(POST_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    return { fileContent, slug };
  });
};

/** ===== PROJECTS ===== */
const getAllProjects = (dir = PROJECTS_DIR) => {
  const slugs = getSlugs(dir);
  return slugs.map((slug) => slug.replace(/\.mdx?$/, ""));
};

const getAllProjectsData = () => {
  return getAllProjects().map((slug) => {
    const fullPath = join(PROJECTS_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    return { fileContent, slug };
  });
};

export {
  getAllProjectsData,
  getAllPostsData,
  getSlugs,
  getPostBySlug,
  getAllPosts,
};
