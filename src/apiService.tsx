import { url } from './react-app-env.d';
import {
  fetchResultsSuccess,
  fetchResultsError,
  fetchResultsPending
} from './redux/actions/findResults';
import { Dispatch } from 'redux';

export function apiRequest(text: string) {
  return (dispatch: Dispatch) => {
    dispatch(fetchResultsPending());
    fetch(`${url}search?q=${text}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchResultsSuccess(res.results));
      })
      .catch(error => {
        dispatch(fetchResultsError(error));
      });
    console.log(text);
  };
}
