import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaCheckCircle,
  FaShippingFast,
  FaShieldAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            🔥 Nigeria's Trusted Gadget Store
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Premium
            <span className="text-red-600"> Gadgets </span>
            At The Best Prices.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-xl">
            Shop genuine smartphones, laptops, smartwatches,
            AirPods and accessories with nationwide delivery,
            secure payments and excellent customer support.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition duration-300 hover:scale-105"
            >
              Shop Now
              <FaArrowRight />
            </Link>

            <a
              href="https://wa.me/2349043133938"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition duration-300 hover:scale-105"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

          {/* Trust Features */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <div>
                <h3 className="font-bold text-white">
                  Genuine Products
                </h3>
                <p className="text-zinc-400 text-sm">
                  100% Original
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaShippingFast className="text-red-500 text-2xl" />
              <div>
                <h3 className="font-bold text-white">
                  Fast Delivery
                </h3>
                <p className="text-zinc-400 text-sm">
                  Nationwide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-blue-500 text-2xl" />
              <div>
                <h3 className="font-bold text-white">
                  Secure Shopping
                </h3>
                <p className="text-zinc-400 text-sm">
                  Trusted Service
                </p>
              </div>
            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-extrabold text-red-500">
                500+
              </h2>
              <p className="text-zinc-400 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-red-500">
                100+
              </h2>
              <p className="text-zinc-400 mt-2">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-red-500">
                24/7
              </h2>
              <p className="text-zinc-400 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl max-w-md w-full">

            <span className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              Best Seller
            </span>

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
              alt="iPhone"
              className="rounded-2xl w-full h-96 object-cover hover:scale-105 transition duration-500"
            />

            <div className="mt-8">

              <h2 className="text-3xl font-bold text-white">
                iPhone 16 Pro Max
              </h2>

              <p className="text-zinc-400 mt-3 leading-7">
                Powerful performance, premium design and an
                incredible camera experience.
              </p>

              <h3 className="text-red-500 text-4xl font-extrabold mt-6">
                ₦1,850,000
              </h3>

              <Link
                to="/products"
                className="block mt-8 text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition"
              >
                View Products
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}