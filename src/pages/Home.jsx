import { useState } from "react";

import Hero from "../components/Hero";
import Brands from "../components/Brands";
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
      {/* Hero */}
      <Hero />

      {/* Brands */}
      <Brands />

      {/* Flash Sale */}
      <FlashSale />

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <span className="text-red-500 uppercase tracking-[4px] font-bold">
              FEATURED COLLECTION
            </span>

            <h2 className="text-5xl font-extrabold text-white mt-5">
              Explore Our Premium Gadgets
            </h2>

            <p className="text-zinc-400 mt-5 max-w-3xl mx-auto text-lg">
              Discover premium smartphones, laptops,
              smart watches and accessories carefully
              selected to give you the best technology
              at unbeatable prices.
            </p>

          </div>

          <div className="mt-14">
            <SearchBar onSearch={setSearchTerm} />

            <div className="mt-8">
              <CategoryFilter
                selectedCategory={category}
                onCategoryChange={setCategory}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 mb-6">

            <h3 className="text-white text-3xl font-bold">
              Available Products
            </h3>

            <span className="bg-red-600 px-5 py-2 rounded-full text-white font-semibold">
              {filteredProducts.length} Products
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  category={product.category}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                  stock={product.stock}
                  image={product.image}
                  badge={product.badge}
                />
              ))
            ) : (
              <div className="col-span-full py-20">

                <div className="bg-zinc-900 rounded-3xl p-10 text-center">

                  <h2 className="text-3xl text-white font-bold">
                    No Products Found
                  </h2>

                  <p className="text-zinc-400 mt-4">
                    Try another search or select a different category.
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Reviews */}
      <Reviews />

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />
    </>
  );
}