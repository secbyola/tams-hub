import { useState } from "react";
import Hero from "../components/Hero";
import FlashSale from "../components/FlashSale";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

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
    </>
  );
}