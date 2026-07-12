import { useState } from "react";
import Hero from "../components/Hero";
import FlashSale from "../components/FlashSale";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
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

      <section className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-10">
            Featured Products
          </h2>

          <SearchBar onSearch={setSearchTerm} />

          <CategoryFilter
            selectedCategory={category}
            onCategoryChange={setCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  badge={product.badge}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-xl">
                No products found.
              </div>
            )}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Reviews />

      <Footer />

      <WhatsAppButton />
    </>
  );
}