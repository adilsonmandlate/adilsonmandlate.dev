import mdxPrism from "mdx-prism";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostBySlug, getAllPosts, getPostSlugs } from "../../lib/api";

export default function Post({ source, frontMatter }) {
  return (
    <div>
      <main>
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold">{frontMatter.title}</h2>
        </div>
        <div className="prose">
          <MDXRemote {...source} />
        </div>
      </main>
    </div>
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
    props: { source: mdxSource, frontMatter: data },
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
