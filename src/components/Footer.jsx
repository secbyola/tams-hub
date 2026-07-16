import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Newsletter */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-extrabold text-white">
            Never Miss a Deal 🚀
          </h2>

          <p className="text-red-100 mt-5 text-lg max-w-3xl mx-auto leading-8">
            Join the TAM'S HUB community and receive exclusive gadget
            discounts, flash sales, giveaways and updates on the latest
            smartphones, laptops and accessories.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-96 px-6 py-4 rounded-xl text-black outline-none"
            />

            <button className="bg-black hover:bg-zinc-900 px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition">
              Subscribe
              <FaArrowRight />
            </button>

          </div>

        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-zinc-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-extrabold text-red-600">
              TAM'S HUB
            </h2>

            <p className="text-zinc-400 mt-6 leading-8">
              Your trusted destination for premium smartphones,
              laptops, smartwatches and accessories.
              We deliver genuine products at competitive prices
              with excellent customer service.
            </p>

            <div className="flex gap-4 mt-8 text-xl">

              <a href="#">
                <FaFacebook className="hover:text-red-500 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-red-500 transition" />
              </a>

              <a href="#">
                <FaTwitter className="hover:text-red-500 transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-red-500 transition" />
              </a>

              <a
                href="https://wa.me/2349043133938"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="hover:text-green-500 transition" />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link to="/" className="block hover:text-red-500 transition">
                Home
              </Link>

              <Link to="/products" className="block hover:text-red-500 transition">
                Products
              </Link>

              <Link to="/about" className="block hover:text-red-500 transition">
                About
              </Link>

              <Link to="/contact" className="block hover:text-red-500 transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Categories
            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>📱 Smartphones</p>

              <p>💻 Laptops</p>

              <p>⌚ Smart Watches</p>

              <p>🎧 Accessories</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-zinc-400">

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                +234 904 313 3938
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                info@tamshub.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                Lagos, Nigeria
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-zinc-500 text-center md:text-left">
              © 2026 TAM'S HUB. All Rights Reserved.
            </p>

            <p className="text-zinc-500">
              Built with ❤️ using React + Vite + Tailwind CSS
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}