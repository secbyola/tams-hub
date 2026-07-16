import {
  FaCheckCircle,
  FaLaptop,
  FaMobileAlt,
  FaHeadset,
  FaShippingFast,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="text-red-500 uppercase tracking-[4px] font-bold">
            ABOUT TAM'S HUB
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5">
            Your Trusted Gadget Store
          </h1>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg">
            TAM'S HUB is committed to providing premium smartphones,
            laptops, tablets, smartwatches and accessories at affordable
            prices with excellent customer service.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-20">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-zinc-400 leading-8">
              We are passionate about technology and committed to
              helping customers get genuine gadgets from trusted
              brands. Every product is carefully selected to ensure
              quality, durability and value for money.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>100% Genuine Products</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Affordable Prices</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Nationwide Delivery</span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Excellent Customer Support</span>
              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 rounded-3xl p-8 text-center">
              <FaMobileAlt className="text-red-500 text-5xl mx-auto mb-5" />
              <h3 className="font-bold text-xl">Phones</h3>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 text-center">
              <FaLaptop className="text-red-500 text-5xl mx-auto mb-5" />
              <h3 className="font-bold text-xl">Laptops</h3>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 text-center">
              <FaHeadset className="text-red-500 text-5xl mx-auto mb-5" />
              <h3 className="font-bold text-xl">Support</h3>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 text-center">
              <FaShippingFast className="text-red-500 text-5xl mx-auto mb-5" />
              <h3 className="font-bold text-xl">Fast Delivery</h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}