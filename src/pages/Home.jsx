import { useState } from "react";
import Hero from "../components/Hero";
import FlashSale from "../components/FlashSale";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero />
      <FlashSale />
      <Categories />
      <SearchBar onSearch={setSearchTerm} />
    </>
  );
}