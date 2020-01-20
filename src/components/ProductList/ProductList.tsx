import React from 'react';
import Product from '../Product/Product';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useStyles } from './ProductList.styles';

export default function ProductList() {
  const classes = useStyles();

  const products = useSelector(
    (store: RootState) => store.reducerResults.result
  );
  let productsFromAPI: JSX.Element[] | JSX.Element;
  if (products && products.length > 0) {
    productsFromAPI = products.map((item, index) => (
      <Product key={index} product={item} />
    ));
  } else {
    productsFromAPI = <div>No has buscado productos</div>;
  }
  return <div className={classes.container}>{productsFromAPI}</div>;
}
