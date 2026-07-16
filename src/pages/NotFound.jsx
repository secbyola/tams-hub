import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-8xl md:text-9xl font-extrabold text-red-600">
          404
        </h1>

        <h2 className="text-5xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-zinc-400 mt-6 text-lg leading-8">
          Sorry, the page you are looking for doesn't exist,
          has been moved or the URL is incorrect.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-5 mt-12">

          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
          >
            <FaHome />
            Back Home
          </Link>

          <Link
            to="/products"
            className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
          >
            <FaSearch />
            Browse Products
          </Link>

        </div>

      </div>

    </section>
  );
}