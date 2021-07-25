import Link from "next/link";
import { format, parseISO } from "date-fns";

const Post = ({ title, description, slug, date }) => {
  return (
    <li className="pb-16">
      <Link href={`/blog/${slug}`}>
        <a className="w-full no-underline">
          <div>
            <h3 className="text-xl font-medium md:text-3xl mb-1 text-gray-800 dark:text-gray-50">
              {title}
            </h3>
            <p className="mb-3 text-gray-600 dark:text-gray-200">
              {description}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Post published on{" "}
              <time>{format(parseISO(date), "MMMM dd, yyy")}</time>
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Post;
