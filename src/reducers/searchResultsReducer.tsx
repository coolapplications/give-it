import IProduct from '../models/ProductModel';
import {
  fetchResultsActionTypes,
  myFindResultsActionTypes,
} from '../actions/findResultsAction';

interface IResults {
  pending: boolean;
  result?: IProduct[] | null;
  error?: any;
  totalProducts: number;
  searchTerm: string;
  page: number;
}

const defaultState: IResults = {
  pending: false,
  result: null,
  error: null,
  totalProducts: 1,
  searchTerm: '',
  page: 1,
};

function reducerResults(
  state: IResults = defaultState,
  action: fetchResultsActionTypes
): IResults {
  switch (action.type) {
    case myFindResultsActionTypes.fetchResultsPending: {
      return { ...state, pending: true };
    }

    case myFindResultsActionTypes.fetchResultsSuccess: {
      return { ...state, pending: false, result: action.payload };
    }

    case myFindResultsActionTypes.fetchResultsError: {
      return { ...state, pending: false, error: action.payload };
    }
    case myFindResultsActionTypes.totalProductsChange: {
      return { ...state, totalProducts: action.payload };
    }

    case myFindResultsActionTypes.pageChange: {
      return { ...state, page: action.payload };
    }

    default:
      return state;
  }
}

export default reducerResults;
