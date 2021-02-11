import {
  SET_OBJECTS, SET_FILTER_INDEX, SET_FILTER_NODE,
} from '../actions/types';
import SCREENS from '../navigation/navigationScreens';

const initialState = {
  filter: {
    selectedNode: SCREENS.flower,
    selectedIndex: 0,
    selectedAugments: [],
    selectedMedia: [],
    selectedMaterial: [],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_NODE:
      return {
        ...state,
        filter: {
          selectedNode: action.node,
          selectedIndex: state.filter.selectedIndex,
          selectedAugments: state.filter.selectedAugments,
          selectedMedia: state.filter.selectedMedia,
          selectedMaterial: state.filter.selectedMaterial,
        },
      };
    case SET_FILTER_INDEX:
      return {
        ...state,
        filter: {
          selectedIndex: action.index,
          selectedNode: state.filter.selectedNode,
          selectedAugments: state.filter.selectedAugments,
          selectedMedia: state.filter.selectedMedia,
          selectedMaterial: state.filter.selectedMaterial,
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
          selectedMaterial: action.material,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
