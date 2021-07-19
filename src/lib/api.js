import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

const POST_DIR = join(process.cwd(), "src", "posts");

const getPostSlugs = (dir) => {
  return fs.readdirSync(dir);
};

const getAllPosts = (dir = POST_DIR) => {
  const slugs = getPostSlugs(dir);
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

export { getAllPostsData, getPostSlugs, getPostBySlug, getAllPosts };
