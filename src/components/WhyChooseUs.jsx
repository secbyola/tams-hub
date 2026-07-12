export default function WhyChooseUs() {
  const features = [
    {
      title: "100% Original Products",
      description: "We sell only genuine phones, laptops and accessories.",
    },
    {
      title: "Nationwide Delivery",
      description: "Fast and secure delivery anywhere in Nigeria.",
    },
    {
      title: "Affordable Prices",
      description: "Competitive prices with amazing deals every week.",
    },
    {
      title: "24/7 Customer Support",
      description: "We're always available on WhatsApp to help you.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Why Choose TAM'S HUB?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition"
            >
              <h3 className="text-red-500 text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}