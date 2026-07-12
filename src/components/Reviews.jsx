export default function Reviews() {
  const reviews = [
    {
      name: "Adebayo",
      review: "Excellent service! My iPhone arrived the next day and it was original.",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Blessing",
      review: "I bought a laptop from TAM'S HUB and it's working perfectly. Highly recommended!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Emmanuel",
      review: "Great prices and very fast WhatsApp response.",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 shadow-lg"
            >
              <p className="text-yellow-400 text-xl">
                {review.stars}
              </p>

              <p className="text-gray-300 mt-4 italic">
                "{review.review}"
              </p>

              <h3 className="text-red-500 font-bold mt-6">
                — {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}