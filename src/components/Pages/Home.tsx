import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductList from "../ProductList/ProductList";

export default function Home() {
  return (
    <div>
      <SearchBar counter={0} />
      <ProductList />
    </div>
  );
}
