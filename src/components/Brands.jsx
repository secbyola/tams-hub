import {
  FaApple,
  FaLaptop,
  FaHeadphones,
} from "react-icons/fa";

import { SiSamsung, SiLenovo, SiDell } from "react-icons/si";

export default function Brands() {
  const brands = [
    {
      name: "Apple",
      icon: <FaApple size={45} />,
    },
    {
      name: "Samsung",
      icon: <SiSamsung size={45} />,
    },
    {
      name: "HP",
      icon: <FaLaptop size={45} />,
    },
    {
      name: "Lenovo",
      icon: <SiLenovo size={45} />,
    },
    {
      name: "Dell",
      icon: <SiDell size={45} />,
    },
    {
      name: "Accessories",
      icon: <FaHeadphones size={45} />,
    },
  ];

  return (
    <section className="bg-zinc-950 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-zinc-900 hover:bg-red-600 transition duration-300 rounded-2xl p-8 flex flex-col items-center gap-4 cursor-pointer"
            >
              <div className="text-white">
                {brand.icon}
              </div>

              <h3 className="text-white font-semibold">
                {brand.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}