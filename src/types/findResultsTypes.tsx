import IProduct from '../models/ProductModel';

export const FETCH_RESULTS_PENDING = 'FETCH_RESULTS_PENDING';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';
export const FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR';

export interface fetchResultsPendingAction {
  type: typeof FETCH_RESULTS_PENDING;
}

export interface fetchResultsSuccessAction {
  type: typeof FETCH_RESULTS_SUCCESS;
  results: IProduct[];
}

export interface fetchResultsErrorAction {
  type: typeof FETCH_RESULTS_ERROR;
  error: any;
}

export type fetchResultsActionTypes =
  | fetchResultsPendingAction
  | fetchResultsSuccessAction
  | fetchResultsErrorAction;
