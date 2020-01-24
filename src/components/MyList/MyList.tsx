import React from 'react';
import Product from '../Product/Product';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useStyles } from './MyList.styles';
import IProduct from '../../models/ProductModel';

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
      <Product key={index} product={item} />
    ));
  } else {
    productsList = <div>No has buscado productos</div>;
  }
  return <div className={classes.container}>{productsList}</div>;
}
