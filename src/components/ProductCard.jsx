import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

export default function ProductCard({
  id,
  name,
 brand,
  price,
  oldPrice,
  image,
  badge,
  rating = 5,
  reviews = 0,
  stock = true,
}) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const formatPrice = (value) => {
    if (typeof value === "number") {
      return `₦${value.toLocaleString()}`;
    }
    return value;
  };

  const discount =
    oldPrice && typeof price === "number"
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <div className="group bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-3">

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        {badge && (
          <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {badge}
          </span>
        )}

        {discount && (
          <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </span>
        )}

      </div>

      <div className="p-6">

        <p className="text-zinc-400 text-sm">
          {brand}
        </p>

        <h2 className="text-white text-2xl font-bold mt-2 line-clamp-2">
          {name}
        </h2>

        <div className="flex items-center gap-1 text-yellow-400 mt-4">

          {renderStars()}

          <span className="text-zinc-400 text-sm ml-2">
            ({reviews})
          </span>

        </div>

        <div className="mt-5">

          <h3 className="text-red-500 text-3xl font-bold">
            {formatPrice(price)}
          </h3>

          {oldPrice && (
            <p className="text-zinc-500 line-through mt-1">
              {formatPrice(oldPrice)}
            </p>
          )}

        </div>

        <div className="mt-4">

          {stock ? (
            <span className="text-green-500 font-semibold">
              ✔ In Stock
            </span>
          ) : (
            <span className="text-red-500 font-semibold">
              ✖ Out of Stock
            </span>
          )}

        </div>

        <div className="grid grid-cols-2 gap-3 mt-8">

          <button
            onClick={() =>
              addToCart({
                id,
                name,
                image,
                price,
                quantity: 1,
              })
            }
            disabled={!stock}
            className={`py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition ${
              stock
                ? "bg-green-600 hover:bg-green-700"
                : "bg-zinc-700 cursor-not-allowed"
            }`}
          >
            <FaShoppingCart />
            Cart
          </button>

          <button
            onClick={() =>
              addToWishlist({
                id,
                name,
                image,
                price,
                oldPrice,
                brand,
              })
            }
            className="bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition"
          >
            <FaHeart />
            Save
          </button>

        </div>

        <Link
          to={`/product/${id}`}
          className="block mt-4 text-center bg-white text-black hover:bg-zinc-200 py-3 rounded-xl font-bold transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}