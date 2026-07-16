import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Adebayo",
      location: "Lagos",
      review:
        "Excellent service! My iPhone arrived the next day, perfectly sealed and 100% original. I'll definitely shop again.",
    },
    {
      name: "Blessing",
      location: "Abuja",
      review:
        "I bought a laptop from TAM'S HUB and the experience was amazing. Great customer support and fast delivery.",
    },
    {
      name: "Emmanuel",
      location: "Port Harcourt",
      review:
        "Very affordable prices and quick WhatsApp response. The ordering process was smooth from start to finish.",
    },
  ];

  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-500 uppercase tracking-[4px] font-bold">
            Testimonials
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-5">
            What Our Customers Say
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Customer satisfaction is our priority. Here's what some of our
            happy customers have to say about shopping with TAM'S HUB.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-3 hover:border-red-600 transition-all duration-300"
            >

              <FaQuoteLeft className="text-red-600 text-4xl mb-6" />

              <div className="flex text-yellow-400 gap-1 mb-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-zinc-300 leading-8 italic">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <FaUserCircle className="text-5xl text-red-500" />

                <div>

                  <h3 className="text-white font-bold text-xl">
                    {review.name}
                  </h3>

                  <p className="text-zinc-500">
                    {review.location}, Nigeria
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">

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
              Premium Products
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-red-500">
              99%
            </h2>
            <p className="text-zinc-400 mt-2">
              Satisfaction Rate
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-red-500">
              24/7
            </h2>
            <p className="text-zinc-400 mt-2">
              Customer Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}