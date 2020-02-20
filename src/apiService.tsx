import { url } from './react-app-env.d';
import {
  fetchResultsSuccess,
  fetchResultsError,
  fetchResultsPending,
  pageChange
} from './actions/findResultsAction';
import { Dispatch } from 'redux';
import IProduct from './models/ProductModel';

export function apiRequest(text: string, page: number = 1) {
  const limit = 10;
  const offset = limit * (page - 1);
  return (dispatch: Dispatch) => {
    dispatch(pageChange(page));
    dispatch(fetchResultsPending());
    fetch(`${url}search?q=${text}&offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchResultsSuccess(res.results as IProduct[]));
      })
      .catch(error => {
        dispatch(fetchResultsError(error));
      });
  };
}
export function apiSellerOnly(id: number) {
  return fetch(`${url}search?seller_id=${id}`);
}
