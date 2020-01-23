import {
  FETCH_RESULTS_ERROR,
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_SUCCESS,
  fetchResultsErrorAction,
  fetchResultsPendingAction,
  fetchResultsSuccessAction
} from '../types/findResultsTypes';
import IProduct from '../models/ProductModel';

export function fetchResultsPending(): fetchResultsPendingAction {
  return {
    type: FETCH_RESULTS_PENDING
  };
}

export function fetchResultsSuccess(
  data: IProduct[]
): fetchResultsSuccessAction {
  return {
    type: FETCH_RESULTS_SUCCESS,
    results: data
  };
}

export function fetchResultsError(data: any): fetchResultsErrorAction {
  return {
    type: FETCH_RESULTS_ERROR,
    error: data
  };
}
