import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductList from "../ProductList/ProductList";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export default function Home() {
  const counterAdd = useSelector(
    (store: RootState) => store.myProductListReducer.result.length
  );
  return (
    <div>
      <SearchBar counter={counterAdd} />
      <ProductList />
    </div>
  );
}
