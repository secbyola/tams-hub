import { FaMinus, FaPlus, FaTrash, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const getPrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^\d]/g, ""));
  };

  const subtotal = cart.reduce((sum, item) => {
    return sum + getPrice(item.price) * item.quantity;
  }, 0);

  const shipping = cart.length > 0 ? 5000 : 0;

  const total = subtotal + shipping;

  const order = cart
    .map(
      (item) =>
        `• ${item.name}\nQuantity: ${item.quantity}\nPrice: ₦${getPrice(
          item.price
        ).toLocaleString()}`
    )
    .join("\n\n");

  const whatsappLink = `https://wa.me/2349043133938?text=${encodeURIComponent(
`Hello TAM'S HUB,

I would like to place the following order:

${order}

Subtotal: ₦${subtotal.toLocaleString()}
Delivery: ₦${shipping.toLocaleString()}
Total: ₦${total.toLocaleString()}

Please confirm availability.`
  )}`;

  return (
    <section className="bg-black min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-white mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (

          <div className="bg-zinc-900 rounded-3xl p-16 text-center">

            <h2 className="text-4xl text-white font-bold">
              Your Cart is Empty
            </h2>

            <p className="text-zinc-400 mt-4">
              Looks like you haven't added any products yet.
            </p>

            <Link
              to="/products"
              className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-bold"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-zinc-900 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-white">
                      {item.name}
                    </h2>

                    <p className="text-red-500 text-2xl font-bold mt-2">
                      ₦{getPrice(item.price).toLocaleString()}
                    </p>

                    <div className="flex items-center gap-4 mt-6">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl text-white"
                      >
                        <FaMinus />
                      </button>

                      <span className="text-white text-2xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl text-white"
                      >
                        <FaPlus />
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl"
                  >
                    <FaTrash />
                  </button>

                </div>

              ))}

            </div>

            <div>

              <div className="bg-zinc-900 rounded-3xl p-8 sticky top-24">

                <h2 className="text-3xl font-bold text-white mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5 text-lg">

                  <div className="flex justify-between text-zinc-300">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-zinc-300">
                    <span>Delivery</span>
                    <span>₦{shipping.toLocaleString()}</span>
                  </div>

                  <hr className="border-zinc-700" />

                  <div className="flex justify-between text-2xl font-bold text-white">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>

                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"
                >
                  <FaWhatsapp />
                  Checkout on WhatsApp
                </a>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}