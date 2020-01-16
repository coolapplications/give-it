import {
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_ERROR,
  fetchResultsActionTypes
} from '../types/findResultsTypes';
const defaultState = {
  pending: false,
  result: null,
  error: null
};

function reducerResults(
  state: typeof defaultState = defaultState,
  action: fetchResultsActionTypes
) {
  switch (action.type) {
    case FETCH_RESULTS_PENDING: {
      return { ...state, pending: true };
    }

    case FETCH_RESULTS_SUCCESS: {
      return { ...state, pending: false, results: action.results };
    }

    case FETCH_RESULTS_ERROR: {
      return { ...state, pending: false, error: action.error };
    }

    default:
      return state;
  }
}

export default reducerResults;
