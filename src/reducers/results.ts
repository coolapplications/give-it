import {
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_ERROR,
  fetchResultsActionTypes
} from '../types/findResultsTypes';
import IProduct from '../models/ProductModel';

interface IResults {
  pending: boolean;
  result?: IProduct[] | null;
  error?: any;
}

const defaultState: IResults = {
  pending: false,
  result: null,
  error: null
};

function reducerResults(
  state: IResults = defaultState,
  action: fetchResultsActionTypes
): IResults {
  switch (action.type) {
    case FETCH_RESULTS_PENDING: {
      return { ...state, pending: true };
    }

    case FETCH_RESULTS_SUCCESS: {
      return { ...state, pending: false, result: action.results };
    }

    case FETCH_RESULTS_ERROR: {
      return { ...state, pending: false, error: action.error };
    }

    default:
      return state;
  }
}

export default reducerResults;
