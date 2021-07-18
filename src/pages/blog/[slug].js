import Head from "next/head";
import mdxPrism from "mdx-prism";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { format, parseISO } from "date-fns";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import readingTime from "reading-time";

export default function Post({ source, frontMatter }) {
  return (
    <article className="flex flex-col justify-center items-start w-full">
      <Head>
        <title>
          {frontMatter.title} - Adilson Mandlate | Front end developer
        </title>
      </Head>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight md:leading-tight">
        {frontMatter.title}
      </h1>
      <div className="flex flex-row justify-start items-center mt-5 mb-5 text-gray-500">
        <p className="text-sm ">
          {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyy")}
        </p>
        <span className="mx-3 " aria-label="separator">
          -
        </span>
        <p className="text-sm ">{frontMatter.readingTime.text}</p>
      </div>

      <div className="prose dark:prose-dark">
        <MDXRemote {...source} />
      </div>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const fileContent = getPostBySlug(slug);

  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: { readingTime: readingTime(content), ...data },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
