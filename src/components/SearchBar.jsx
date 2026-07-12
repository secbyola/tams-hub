import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 mb-12">
      <input
        type="text"
        placeholder="🔍 Search phones, laptops, accessories..."
        value={search}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-red-600"
      />
    </div>
  );
}