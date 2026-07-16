import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useTheme } from "../Context/ThemeContext";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className="hover:text-red-500 transition"
      >
        Home
      </Link>

      <Link
        to="/products"
        onClick={() => setMenuOpen(false)}
        className="hover:text-red-500 transition"
      >
        Products
      </Link>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className="hover:text-red-500 transition"
      >
        About
      </Link>

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="hover:text-red-500 transition"
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md shadow-xl transition-colors duration-300 ${
        theme === "dark"
          ? "bg-zinc-950/95 text-white border-b border-zinc-800"
          : "bg-white/95 text-black border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-red-600 tracking-wide"
        >
          TAM'S HUB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-semibold">
          {navLinks}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button
            onClick={toggleTheme}
            className="text-xl hover:text-yellow-500 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/wishlist"
            className="relative hover:text-red-500 transition"
          >
            <FaHeart size={22} />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-red-500 transition"
          >
            <FaShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <a
            href="https://wa.me/2349043133938"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-bold transition"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden px-6 pb-6 flex flex-col gap-5 font-semibold ${
            theme === "dark"
              ? "bg-zinc-950"
              : "bg-white"
          }`}
        >
          {navLinks}

          <a
            href="https://wa.me/2349043133938"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-bold"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}