import {
  SET_OBJECTS, SET_FILTER_INDEX, SET_FILTER_NODE,
} from '../actions/types';

const initialState = {
  filter: {
    selectedNode: 'flower',
    selectedIndex: 0,
    selectedAugments: [],
    selectedMedia: [],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_NODE:
      return {
        ...state,
        selectedNode: action.node,
        selectedIndex: state.filter.selectedIndex,
        selectedAugments: state.filter.augments,
        selectedMedia: state.filter.media,
      };
    case SET_FILTER_INDEX:
      return {
        ...state,
        filter: {
          selectedIndex: action.index,
          selectedNode: state.filter.selectedNode,
          selectedAugments: state.filter.selectedAugments,
          selectedMedia: state.filter.selectedMedia,
        },
      };
    case SET_OBJECTS:
      return {
        ...state,
        filter: {
          selectedIndex: state.filter.selectedIndex,
          selectedNode: state.filter.selectedNode,
          selectedAugments: action.augments,
          selectedMedia: action.media,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
