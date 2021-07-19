import Link from "next/link";

const Post = ({ title, description, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full no-underline">
        <div className="mb-9">
          <h3 className="text-lg font-medium md:text-xl mb-2 text-gray-800 dark:text-gray-50">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-200">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
