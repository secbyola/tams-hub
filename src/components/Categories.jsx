import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      title: "Premium Smartphones",
      subtitle: "Latest Apple & Samsung Devices",
      icon: <FaMobileAlt size={55} />,
      color: "from-red-600 to-red-800",
    },
    {
      title: "Business Laptops",
      subtitle: "HP • Lenovo • Dell",
      icon: <FaLaptop size={55} />,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Smart Accessories",
      subtitle: "AirPods • Watches • Speakers",
      icon: <FaHeadphones size={55} />,
      color: "from-green-600 to-green-800",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-red-500 uppercase tracking-widest font-semibold">
            Featured Collection
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Shop By Category
          </h2>

          <p className="text-zinc-400 mt-5 max-w-3xl mx-auto">
            Find the latest gadgets, premium laptops and smart accessories
            from the world's most trusted technology brands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {categories.map((category) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${category.color} rounded-3xl p-10 text-white shadow-2xl hover:scale-105 transition duration-300`}
            >
              <div className="mb-8">
                {category.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {category.title}
              </h3>

              <p className="mt-4 text-lg opacity-90">
                {category.subtitle}
              </p>

              <Link
                to="/products"
                className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-zinc-200 transition"
              >
                Shop Now →
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}