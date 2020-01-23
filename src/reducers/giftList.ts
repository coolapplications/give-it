import { addSuccessAction, ADD_PRODUCT_SUCCESS } from "../types/addToListTypes";
import IProduct from "../models/ProductModel";

interface IResults {
  result?: IProduct[] | null;
}

const defaultState: IResults = {
  result: null
};

function reducerResults(
  state: IResults = defaultState,
  action: addSuccessAction
): IResults {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS: {
      return { ...state, result: action.results };
    }

    default:
      return state;
  }
}

export default reducerResults;
