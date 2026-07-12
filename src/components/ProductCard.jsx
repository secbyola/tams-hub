export default function ProductCard({
  name,
  price,
  image,
  badge,
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

      <div className="relative">

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />

        <span className="absolute top-3 left-3 bg-red-600 text-white text-sm px-3 py-1 rounded-full font-bold">
          {badge}
        </span>

      </div>

      <div className="p-5">

        <h2 className="text-white text-xl font-bold">
          {name}
        </h2>

        <p className="text-yellow-400 mt-2">
          ⭐⭐⭐⭐⭐
        </p>

        <p className="text-red-500 text-2xl font-bold mt-3">
          {price}
        </p>

        <button className="w-full mt-5 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold">
          Buy on WhatsApp
        </button>

      </div>

    </div>
  );
}