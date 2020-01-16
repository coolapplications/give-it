import { createStore, combineReducers } from 'redux';
import reducerResults from './reducers/results';

const reducer = combineReducers({
  reducerResults
});
export type RootState = ReturnType<typeof reducer>;
const store = createStore(reducer);

export default store;
