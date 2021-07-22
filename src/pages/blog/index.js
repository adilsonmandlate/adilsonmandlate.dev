import matter from "gray-matter";
import Head from "next/head";
import { Fragment } from "react";
import { BlogPost } from "../../components/BlogPost";
import { getAllPostsData } from "../../lib/api";

const BlogIndex = ({ posts }) => (
  <Fragment>
    <Head>
      <title>Blog - Adilson Mandlate | Front end developer</title>
    </Head>

    <header className="mb-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">
        Blog
      </h1>

      <p>Once upon a time, I wrote about...</p>
    </header>

    <section>
      {posts.map((post) => {
        return (
          <BlogPost
            key={post.title}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        );
      })}
    </section>
  </Fragment>
);

export async function getStaticProps() {
  const posts = getAllPostsData();

  const allPosts = posts
    .map((post) => {
      const { data } = matter(post.fileContent);
      return { slug: post.slug, ...data };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default BlogIndex;
