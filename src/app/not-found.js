import Link from "next/link";

export const metadata = {
  title: "Page not found - Adilson Mandlate | Front end developer",
};

export default function NotFound() {
  return (
    <>
      <h1 className="text-6xl md:text-7xl font-serif text-gray-50 font-bold mb-5">
        404 | Page not found
      </h1>

      <p className="text-xl leading-9 max-w-4xl font-sans text-gray-50">
        Sorry, but the page you're trying to get doesn't exist. Maybe go{" "}
        <Link href="/">home</Link>?
      </p>
    </>
  );
}
