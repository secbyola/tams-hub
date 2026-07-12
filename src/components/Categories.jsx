export default function Categories() {
  const categories = [
    {
      name: "📱 Phones",
      desc: "Latest iPhones, Samsung, Xiaomi & more",
    },
    {
      name: "💻 Laptops",
      desc: "HP, Dell, Lenovo, MacBook",
    },
    {
      name: "⌚ Smart Watches",
      desc: "Apple Watch, Samsung Watch",
    },
    {
      name: "🎧 Accessories",
      desc: "AirPods, Chargers, Power Banks",
    },
  ];

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-zinc-900 p-8 rounded-2xl hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.name}
              </h3>

              <p className="text-gray-300 mt-4">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}