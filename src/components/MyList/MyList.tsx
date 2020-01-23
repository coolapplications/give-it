import React from "react";
import Product from "../Product/Product";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useStyles } from "./MyList.styles";
import IProduct from "../../models/ProductModel";

export default function MyList() {
  const products = useSelector(
    (store: RootState) => store.reducerResults.result
  );
  let myGifts: JSX.Element[] | JSX.Element;
  myGifts=products?.filter(Product.id=)
}
