export default function Cart() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">
          Shopping Cart
        </h1>

        <p className="mt-6 text-gray-400">
          Your cart is currently empty.
        </p>
      </div>
    </div>
  );
}