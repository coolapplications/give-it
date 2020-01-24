import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useStyles } from "./MyList.styles";
import IProduct from "../../models/ProductModel";
import Product from "../Product/Product";

export default function MyList() {
  const classes = useStyles();

  const products = useSelector(
    (store: RootState) =>
      store.myProductListReducer.result
        .map(id =>
          store.reducerResults.result?.find(product => product.id === id)
        )
        .filter(product => product !== undefined) as IProduct[]
  );

  let productsList: JSX.Element[] | JSX.Element;
  if (products && products.length > 0) {
    productsList = products.map((item, index) => (
      <Product
        key={index}
        product={item}
        addOrRemove="Remove from your gift list"
      />
    ));
  } else {
    productsList = <div>You add no products</div>;
  }
  return <div className={classes.container}>{productsList}</div>;
}
