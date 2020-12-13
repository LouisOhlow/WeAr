import { createStore, combineReducers } from 'redux';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  filterRed: filterReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
