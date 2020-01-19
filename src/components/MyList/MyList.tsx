import React from 'react';
import Product from '../Product/Product';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useStyles } from './MyList.styles';

export default function MyList() {
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
    productsFromAPI = <div>No se encontraron productos</div>;
  }
  return <div className={classes.container}>{productsFromAPI}</div>;
}
