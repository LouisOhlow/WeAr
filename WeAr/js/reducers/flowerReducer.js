import {
  SET_FLOWER_COLOR,
  SET_FLOWER_RATIO,
  SET_FLOWER_VIDEO,
  ADD_FLOWER_ROTATION,
} from '../actions/types';

const initialState = {
  flower: {
    primaryColor: '#444400',
    secondaryColor: '#555555',
    src: 'basic',
    height: 1,
    width: 1,
    rotation: 0,
  },
};

const flowerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLOWER_COLOR:
      return {
        ...state,
        flower: {
          primaryColor: action.primaryColor,
          secondaryColor: action.secondaryColor,
          src: state.flower.src,
          height: state.flower.height,
          width: state.flower.width,
          rotation: state.flower.rotation,
        },
      };
    case SET_FLOWER_VIDEO:
      return {
        ...state,
        flower: {
          primaryColor: state.flower.primaryColor,
          secondaryColor: state.flower.secondaryColor,
          src: action.src,
          height: state.flower.height,
          width: state.flower.width,
          rotation: state.flower.rotation,
        },
      };
    case SET_FLOWER_RATIO:
      return {
        ...state,
        flower: {
          primaryColor: state.flower.primaryColor,
          secondaryColor: state.flower.secondaryColor,
          src: state.flower.src,
          height: action.height,
          width: action.width,
          rotation: state.flower.rotation,
        },
      };
    case ADD_FLOWER_ROTATION:
      return {
        ...state,
        flower: {
          primaryColor: state.flower.primaryColor,
          secondaryColor: state.flower.secondaryColor,
          src: state.flower.src,
          height: state.flower.height,
          width: state.flower.width,
          rotation: (action.rotation + state.flower.rotation) % 360,
        },
      };
    default:
      return state;
  }
};

export default flowerReducer;
