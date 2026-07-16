import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-white text-center py-20 text-3xl">
        Product Not Found
      </div>
    );
  }

  const whatsappMessage = `Hello TAM'S HUB, I'm interested in the ${product.name}. Is it still available?`;

  const whatsappLink = `https://wa.me/2349043133938?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-black min-h-screen text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="text-red-500 hover:text-red-400 font-bold"
        >
          ← Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-10 mt-8">

          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-2xl"
          />

          <div>

            <h1 className="text-5xl font-bold">
              {product.name}
            </h1>

            <p className="text-yellow-400 text-2xl mt-3">
              ⭐⭐⭐⭐⭐
            </p>

            <p className="text-red-500 text-4xl font-bold mt-5">
              {product.price}
            </p>

            <p className="mt-8 text-gray-300 leading-8">
              Premium quality device supplied by TAM'S HUB.
              Original product with warranty and nationwide delivery.
            </p>

            <div className="mt-8 space-y-2">
              <p>✅ Original Product</p>
              <p>✅ Warranty Available</p>
              <p>✅ Nationwide Delivery</p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold"
            >
              Buy on WhatsApp
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}