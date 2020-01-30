import React from "react";
import MyList from "../MyList/MyList";
import SearchBar from "../SearchBar/SearchBar";

export default function List() {
  return (
    <div>
      <SearchBar counter={0} />
      <MyList />
    </div>
  );
}
