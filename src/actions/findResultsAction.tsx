import IProduct from '../models/ProductModel';
import { Action } from 'redux';

export enum myFindResultsActionTypes {
  fetchResultsPending = 'fetchResultsPending',
  fetchResultsSuccess = 'fetchResultsSuccess',
  fetchResultsError = 'fetchResultsError',
  totalProductsChange = 'totalProductsChange',
  pageChange = 'pageChange',
}

interface GenericAction<T, P = any> extends Action<T> {
  payload: P;
}
type fetchResultsPendingAction = Action<
  myFindResultsActionTypes.fetchResultsPending
>;
type fetchResultsSuccessAction = GenericAction<
  myFindResultsActionTypes.fetchResultsSuccess,
  IProduct[]
>;
type fetchResultsErrorAction = GenericAction<
  myFindResultsActionTypes.fetchResultsError
>;

type totalProductsChange = GenericAction<
  myFindResultsActionTypes.totalProductsChange,
  number
>;

type pageChange = GenericAction<myFindResultsActionTypes.pageChange, number>;
export function fetchResultsPending(): fetchResultsPendingAction {
  return {
    type: myFindResultsActionTypes.fetchResultsPending,
  };
}

export function fetchResultsSuccess(
  payload: IProduct[]
): fetchResultsSuccessAction {
  return {
    type: myFindResultsActionTypes.fetchResultsSuccess,
    payload,
  };
}

export function fetchResultsError(payload: any): fetchResultsErrorAction {
  return {
    type: myFindResultsActionTypes.fetchResultsError,
    payload,
  };
}
export function totalProductsChange(payload: number): totalProductsChange {
  return {
    type: myFindResultsActionTypes.totalProductsChange,
    payload,
  };
}

export function pageChange(payload: number): pageChange {
  return {
    type: myFindResultsActionTypes.pageChange,
    payload,
  };
}
export type fetchResultsActionTypes =
  | fetchResultsPendingAction
  | fetchResultsSuccessAction
  | fetchResultsErrorAction
  | totalProductsChange
  | pageChange;
