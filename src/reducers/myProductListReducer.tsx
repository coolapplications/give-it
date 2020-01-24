import { MyListActionTypes, myListActions } from '../actions/myListAction';
import produce from 'immer';

interface IMyList {
  pending: boolean;
  result: string[];
  error?: any;
}

const defaultState: IMyList = {
  pending: false,
  result: [],
  error: null
};

export function myProductListReducer(
  state: IMyList = defaultState,
  action: myListActions
): IMyList {
  switch (action.type) {
    case MyListActionTypes.addToMyList: {
      return produce(state, draft => {
        if (!draft.result.includes(action.payload)) {
          draft.result.push(action.payload);
        }
      });
    }

    case MyListActionTypes.removeFromMyList: {
      return produce(state, draft => {
        draft.result = draft.result.filter(id => action.payload !== id);
      });
    }

    default:
      return state;
  }
}
