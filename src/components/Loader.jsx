export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-20 h-20 border-4 border-zinc-700 border-t-red-600 rounded-full animate-spin mx-auto"></div>

        <h2 className="text-white text-3xl font-bold mt-8">
          TAM'S HUB
        </h2>

        <p className="text-zinc-400 mt-3">
          Loading amazing deals...
        </p>
      </div>
    </div>
  );
}