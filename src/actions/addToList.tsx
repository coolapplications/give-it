import IProduct from '../models/ProductModel';
import {addSuccessAction, ADD_PRODUCT_SUCCESS} from '../types/addToListTypes';

export function addToListSuccess(
    data: IProduct[]
  ): addSuccessAction {
    return {
      type: ADD_PRODUCT_SUCCESS,
      results: data
    };
  }