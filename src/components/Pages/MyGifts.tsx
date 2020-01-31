import React from "react";
import MyList from "../MyList/MyList";
import SearchBar from "../SearchBar/SearchBar";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export default function List() {
  const counterRemove = useSelector(
    (store: RootState) => store.myProductListReducer.result.length
  );
  return (
    <div>
      <SearchBar counter={counterRemove} />
      <MyList />
    </div>
  );
}
