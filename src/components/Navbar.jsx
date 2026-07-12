import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-extrabold text-red-600"
        >
          TAM'S HUB
        </Link>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/products" className="hover:text-red-500">Products</Link>
          <Link to="/about" className="hover:text-red-500">About</Link>
          <Link to="/contact" className="hover:text-red-500">Contact</Link>
        </div>

        <div className="flex items-center gap-6 text-white">

          <FaSearch
            size={22}
            className="cursor-pointer hover:text-red-500"
          />

          <div className="relative cursor-pointer">
            <FaShoppingCart
              size={24}
              className="hover:text-red-500"
            />

            <span className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-xs">
              0
            </span>
          </div>

          <a
            href="https://wa.me/2349043133938"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-bold"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </nav>
  );
}