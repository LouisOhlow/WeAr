import { createStore, combineReducers } from 'redux';
import animationReducer from './reducers/animationReducer';
import filterReducer from './reducers/filterReducer';
import flowerReducer from './reducers/flowerReducer';
import heartReducer from './reducers/heartReducer';
import viewReducer from './reducers/viewReducer';

const rootReducer = combineReducers({
  filterRed: filterReducer,
  animationRed: animationReducer,
  flowerRed: flowerReducer,
  heartRed: heartReducer,
  viewRed: viewReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
