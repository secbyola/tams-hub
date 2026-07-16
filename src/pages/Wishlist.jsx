import { Link } from "react-router-dom";
import {
  FaHeart,
  FaTrash,
  FaShoppingCart,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";

export default function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const formatPrice = (price) => {
    if (typeof price === "number") {
      return `₦${price.toLocaleString()}`;
    }

    return price;
  };

  if (wishlist.length === 0) {
    return (
      <section className="bg-black min-h-screen py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-zinc-900 rounded-3xl p-20 text-center">

            <FaHeart className="text-red-500 text-7xl mx-auto mb-8" />

            <h1 className="text-5xl font-extrabold text-white">
              Your Wishlist is Empty
            </h1>

            <p className="text-zinc-400 mt-5 text-lg">
              Save your favourite gadgets here so you can
              easily find them later.
            </p>

            <Link
              to="/products"
              className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold"
            >
              Browse Products
            </Link>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-black min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-12">

          <div>

            <h1 className="text-5xl font-extrabold text-white">
              My Wishlist
            </h1>

            <p className="text-zinc-400 mt-3">
              {wishlist.length} saved item{wishlist.length > 1 ? "s" : ""}
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-2"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <p className="text-zinc-400 text-sm">
                  {item.brand}
                </p>

                <h2 className="text-2xl font-bold text-white mt-2">
                  {item.name}
                </h2>

                <div className="flex items-center gap-2 mt-4">

                  <FaCheckCircle className="text-green-500" />

                  <span className="text-green-400 text-sm">
                    In Stock
                  </span>

                </div>

                <p className="text-red-500 text-3xl font-bold mt-5">
                  {formatPrice(item.price)}
                </p>

                {item.oldPrice && (
                  <p className="text-zinc-500 line-through mt-2">
                    {formatPrice(item.oldPrice)}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3 mt-8">

                  <button
                    onClick={() =>
                      addToCart({
                        ...item,
                        quantity: 1,
                      })
                    }
                    className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Cart
                  </button>

                  <Link
                    to={`/product/${item.id}`}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    <FaEye />
                    View
                  </Link>

                </div>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <FaTrash />
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}