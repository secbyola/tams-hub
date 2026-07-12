export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}) {
  const categories = [
    "All",
    "Phones",
    "Laptops",
    "Accessories",
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            selectedCategory === category
              ? "bg-red-600 text-white"
              : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}