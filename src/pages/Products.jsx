import { useState } from "react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import products from "../data/products";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  filteredProducts = [...filteredProducts];

  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="bg-black min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-red-500 font-bold">
            TAM'S HUB STORE
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
            Explore Our Products
          </h1>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg">
            Browse our collection of premium smartphones,
            laptops, tablets, smart watches and accessories
            at unbeatable prices.
          </p>

        </div>

        <div className="mt-14">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        <div className="mt-8">
          <CategoryFilter
            selectedCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10 mb-8">

          <div className="bg-red-600 px-5 py-3 rounded-full font-bold text-white">
            {filteredProducts.length} Products Found
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-3 text-white"
          >
            <option value="default">Sort Products</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="rating">Highest Rated</option>
          </select>

        </div>

        {filteredProducts.length === 0 ? (

          <div className="bg-zinc-900 rounded-3xl p-16 text-center">

            <h2 className="text-4xl font-bold text-white">
              No Products Found
            </h2>

            <p className="text-zinc-400 mt-4">
              Try changing your search or category.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                category={product.category}
                price={product.price}
                oldPrice={product.oldPrice}
                image={product.image}
                badge={product.badge}
                rating={product.rating}
                reviews={product.reviews}
                stock={product.stock}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}