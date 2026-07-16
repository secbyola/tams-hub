import {
  FaCheckCircle,
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
  FaUndoAlt,
  FaCreditCard,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: "100% Genuine Products",
      description:
        "Every phone, laptop and accessory we sell is original and sourced from trusted suppliers.",
      color: "text-green-500",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Nationwide Delivery",
      description:
        "We deliver safely and quickly to customers across all states in Nigeria.",
      color: "text-red-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Warranty Available",
      description:
        "Selected products come with warranty for extra confidence and peace of mind.",
      color: "text-blue-500",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Need help? Reach us anytime on WhatsApp and we'll respond as quickly as possible.",
      color: "text-yellow-500",
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payments",
      description:
        "Shop with confidence knowing every transaction is handled securely.",
      color: "text-purple-500",
    },
    {
      icon: <FaUndoAlt />,
      title: "Customer Satisfaction",
      description:
        "We're committed to making sure every customer has a smooth and satisfying shopping experience.",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-red-500 uppercase tracking-[4px] font-bold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-5">
            Shop With Confidence
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            TAM'S HUB is committed to providing premium gadgets,
            reliable customer service and a seamless shopping experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-600 hover:-translate-y-2 transition-all duration-300"
            >

              <div
                className={`text-5xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-white text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-zinc-400 mt-5 leading-8">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}