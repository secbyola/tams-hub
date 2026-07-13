import { useState } from "react";
import Hero from "../components/Hero";
import FlashSale from "../components/FlashSale";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero />
      <FlashSale />
      <Categories />
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter
        selectedCategory={category}
        onCategoryChange={setCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            badge={product.badge}
          />
        ))}
      </div>
    </>
  );
}