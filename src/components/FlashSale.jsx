import { FaBolt } from "react-icons/fa";

export default function FlashSale() {
  return (
    <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <div className="inline-flex items-center gap-3 bg-white text-red-600 px-5 py-2 rounded-full font-bold">
              <FaBolt />
              FLASH SALE
            </div>

            <h2 className="text-5xl font-extrabold text-white mt-8">
              Up To
              <span className="text-yellow-300"> 35% OFF </span>
              Selected Gadgets
            </h2>

            <p className="text-red-100 text-lg mt-6 leading-8">
              Don't miss today's biggest deals on smartphones,
              laptops, smart watches and premium accessories.
            </p>

            <button className="mt-10 bg-black hover:bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold transition">
              Shop Flash Deals
            </button>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl">

              <h3 className="text-red-600 font-bold text-xl">
                Smartphones
              </h3>

              <p className="text-4xl font-extrabold mt-5">
                20%
              </p>

              <p className="text-gray-500 mt-2">
                Discount
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl">

              <h3 className="text-red-600 font-bold text-xl">
                Laptops
              </h3>

              <p className="text-4xl font-extrabold mt-5">
                15%
              </p>

              <p className="text-gray-500 mt-2">
                Discount
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl">

              <h3 className="text-red-600 font-bold text-xl">
                Accessories
              </h3>

              <p className="text-4xl font-extrabold mt-5">
                35%
              </p>

              <p className="text-gray-500 mt-2">
                Discount
              </p>

            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl">

              <h3 className="text-red-600 font-bold text-xl">
                Smart Watches
              </h3>

              <p className="text-4xl font-extrabold mt-5">
                25%
              </p>

              <p className="text-gray-500 mt-2">
                Discount
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}