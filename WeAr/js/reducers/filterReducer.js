import { SET_FILTER_INDEX, SET_FILTER_NODE } from '../actions/types';

const initialState = {
  filter: {
    selectedNode: 'flower',
    selectedIndex: 0,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_NODE:
      return {
        ...state,
        selectedNode: action.node,
      };
    case SET_FILTER_INDEX:
      return {
        ...state,
        filter: {
          selectedIndex: action.index,
          selectedNode: state.filter.selectedNode,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
