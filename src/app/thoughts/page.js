import matter from "gray-matter";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllPostsData } from "../../lib/api";

export const metadata = {
  title: "Thoughts",
};

export default async function Thoughts() {
  const posts = getAllPostsData();

  const allPosts = posts
    .map((post) => {
      const { data } = matter(post.fileContent);
      return { slug: post.slug, ...data };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <>
      <header className="pb-9">
        <h1 className="text-5xl font-heading tracking-tight mb-4 bg-gradient-to-r from-red-600 via-orange-400 to-yellow-400 inline-block text-transparent bg-clip-text">
          Read. Think. Write.
        </h1>
      </header>

      <ul>
        {allPosts.map((post) => {
          return (
            <li key={post.slug} className="mb-16">
              <Link
                href={`/thoughts/${post.slug}`}
                className="w-full no-underline"
              >
                <div>
                  <h2 className="text-lg font-heading font-bold text-black dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mb-1 text-base text-black dark:text-white">
                    {post.description}
                  </p>
                  <span className="text-sm text-gray-500">
                    Published on{" "}
                    <time>{format(parseISO(post.date), "MMMM dd, yyyy")}</time>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
