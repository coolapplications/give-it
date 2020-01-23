import IProduct from "../models/ProductModel";

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';

export interface addSuccessAction{
    type: typeof ADD_PRODUCT_SUCCESS;
    results:IProduct[];
}

export type addToListActionTypes = | addSuccessAction;