import { CHANGE_FILTER } from '../actions/types';

const initialState = {
  selectedNode: {
    node: 'flower',
    selectedIndex: 0,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        selectedNode: action.node,
        selectedIndex: action.index,
      };
    default:
      return state;
  }
};

export default filterReducer;
