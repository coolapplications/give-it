import React from "react";
import Product from "../Product/Product";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./ProductList.styles";
import { AddToMyList } from "../../actions/myListAction";
import IProduct from "../../models/ProductModel";

export default function ProductList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(
    (store: RootState) => store.reducerResults.result
  );

  function addItem(prod: IProduct) {
    dispatch(AddToMyList(prod));
  }

  let productsFromAPI: JSX.Element[] | JSX.Element;
  if (products && products.length > 0) {
    productsFromAPI = products.map((item, index) => (
      <Product
        key={index}
        product={item}
        addOrRemove="Add to your gift list"
        actionFunction={addItem}
      />
    ));
  } else {
    productsFromAPI = <div>Search products you wish</div>;
  }
  return <div className={classes.container}>{productsFromAPI}</div>;
}
