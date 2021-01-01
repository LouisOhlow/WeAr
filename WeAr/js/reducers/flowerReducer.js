import { SET_FLOWER_COLOR, SET_FLOWER_VIDEO } from '../actions/types';

const initialState = {
  flower: {
    primaryColor: '#444400',
    secondaryColor: '#555555',
    video: require('../data/media/flower0.mp4'),
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
          video: state.flower.video,
        },
      };
    case SET_FLOWER_VIDEO:
      return {
        ...state,
        flower: {
          primaryColor: state.flower.primaryColor,
          secondaryColor: state.flower.secondaryColor,
          video: action.video,
        },
      };
    default:
      return state;
  }
};

export default flowerReducer;
