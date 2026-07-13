import WhyChooseUs from "../components/WhyChooseUs";

// ...

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

    <WhyChooseUs />
  </>
);