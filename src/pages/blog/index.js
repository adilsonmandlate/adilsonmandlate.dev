import Link from "next/link";

const BlogIndex = () => (
  <>
    <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white">
      Blog
    </h1>
    <p>Once upon a time, I wrote...</p>
  </>
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
