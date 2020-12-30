import { createStore, combineReducers } from 'redux';
import animationReducer from './reducers/animationReducer';
import filterReducer from './reducers/filterReducer';
import flowerReducer from './reducers/flowerReducer';

const rootReducer = combineReducers({
  filterRed: filterReducer,
  animationRed: animationReducer,
  flowerRed: flowerReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
