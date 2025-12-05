import mdxPrism from "mdx-prism";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { format, parseISO } from "date-fns";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import readingTime from "reading-time";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const fileContent = getPostBySlug(slug);
  const { data } = matter(fileContent);

  return {
    title: data.title,
  };
}

export default async function Post({ params }) {
  const { slug } = params;
  const fileContent = getPostBySlug(slug);

  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  });

  const frontMatter = { readingTime: readingTime(content), ...data };

  return (
    <article className="flex flex-col justify-center items-start w-full mb-5">
      <h1 className="text-4xl font-heading font-bold tracking-tight md:leading-tight">
        {frontMatter.title}
      </h1>
      <div className="flex flex-row justify-start items-center text-base mt-5 mb-5 text-black dark:text-white">
        <span className=" text-gray-500">
          Published on{" "}
          <time>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</time>,
          with about {frontMatter.readingTime.text} time
        </span>
      </div>

      <div className="prose dark:prose-dark">
        <MDXRemote {...mdxSource} />
      </div>
    </article>
  );
}
