export enum MyListActionTypes {
  addToMyList = 'addToMyList',
  removeFromMyList = 'removeFromMyList'
}
interface AddToMyListAction {
  type: MyListActionTypes.addToMyList;
  payload: string;
}

interface RemoveFromMyListAction {
  type: MyListActionTypes.removeFromMyList;
  payload: string;
}
export function AddToMyList(payload: string): AddToMyListAction {
  return { type: MyListActionTypes.addToMyList, payload };
}

export function RemoveFromMyList(payload: string): RemoveFromMyListAction {
  return { type: MyListActionTypes.removeFromMyList, payload };
}

export type myListActions = AddToMyListAction | RemoveFromMyListAction;
