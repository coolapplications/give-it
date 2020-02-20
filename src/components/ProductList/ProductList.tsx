import React from 'react';
import Product from '../Product/Product';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './ProductList.styles';
import { AddToMyList } from '../../actions/myListAction';
import IProduct from '../../models/ProductModel';
import Paginator from '../Paginator/Paginator';
import { apiRequest } from '../../apiService';

export default function ProductList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(
    (store: RootState) => store.reducerResults.result
  );
  const searchTerm = useSelector(
    (store: RootState) => store.reducerResults.searchTerm
  );

  const totalProducts = useSelector(
    (store: RootState) => store.reducerResults.totalProducts
  );

  const paginate = (page: number) => dispatch(apiRequest(searchTerm, page));

  function addItem(prod: IProduct) {
    dispatch(AddToMyList(prod));
  }

  let productsFromAPI;
  if (products && products.length > 0) {
    productsFromAPI = products?.map((item, index) => (
      <Product
        key={index}
        product={item}
        addOrRemove='Add to your gift list'
        actionFunction={addItem}
      />
    ));
  } else {
    productsFromAPI = <div>Search products you wish</div>;
  }

  return (
    <div>
      <div>
        <Paginator totalProducts={totalProducts} paginate={paginate} />
      </div>
      <div className={classes.container}>{productsFromAPI} </div>
    </div>
  );
}
