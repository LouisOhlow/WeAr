import {
  SET_OBJECTS, SET_FILTER_INDEX, SET_FILTER_NODE, SET_AUGMENTS, SET_MEDIA, SET_MATERIAL, SET_COLOR,
} from '../actions/types';
import SCREENS from '../navigation/navigationScreens';

const initialState = {
  filter: {
    selectedNode: SCREENS.metal,
    selectedIndex: 0,
    selectedAugments: [],
    selectedMedia: [],
    selectedMaterial: [],
    filterData: {},
    filterColor: '#CCCCCC',
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
          filterData: state.filter.filterData,
          filterColor: state.filter.filterColor,
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
          filterData: state.filter.filterData,
          filterColor: state.filter.filterColor,
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
          filterData: { [`${state.filter.selectedNode}${state.filter.selectedIndex}`]: [action.augments, action.media] },
          filterColor: state.filter.filterColor,
        },
      };
    case SET_AUGMENTS:
      return {
        ...state,
        filter: {
          selectedIndex: state.filter.selectedIndex,
          selectedNode: state.filter.selectedNode,
          selectedAugments: action.augments,
          selectedMedia: state.filter.selectedMedia,
          selectedMaterial: state.filter.selectedMaterial,
          filterData: { [`${state.filter.selectedNode}${state.filter.selectedIndex}`]: [action.augments, action.media] },
          filterColor: state.filter.filterColor,
        },
      };
    case SET_MEDIA:
      return {
        ...state,
        filter: {
          selectedIndex: state.filter.selectedIndex,
          selectedNode: state.filter.selectedNode,
          selectedAugments: state.filter.selectedAugments,
          selectedMedia: action.media,
          selectedMaterial: state.filter.selectedMaterial,
          filterData: state.filter.filterData,
          filterColor: state.filter.filterColor,
        },
      };
    case SET_MATERIAL:
      return {
        ...state,
        filter: {
          selectedIndex: state.filter.selectedIndex,
          selectedNode: state.filter.selectedNode,
          selectedAugments: state.filter.selectedAugments,
          selectedMedia: state.filter.selectedMedia,
          selectedMaterial: action.material,
          filterData: state.filter.filterData,
          filterColor: state.filter.filterColor,
        },
      };
    case SET_COLOR:
      return {
        ...state,
        filter: {
          selectedIndex: state.filter.selectedIndex,
          selectedNode: state.filter.selectedNode,
          selectedAugments: state.filter.selectedAugments,
          selectedMedia: state.filter.selectedMedia,
          selectedMaterial: state.filter.selectedMaterial,
          filterData: state.filter.filterData,
          filterColor: action.color,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
