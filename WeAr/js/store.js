import { createStore, combineReducers } from 'redux';
import animationReducer from './reducers/animationReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  filterRed: filterReducer,
  animationRed: animationReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
