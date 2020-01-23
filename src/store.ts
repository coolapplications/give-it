import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerResults from './reducers/results';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  reducerResults
});
export type RootState = ReturnType<typeof reducer>;
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
