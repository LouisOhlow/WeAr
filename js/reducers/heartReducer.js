import {
  SET_HEART_COLOR, SET_HEART_SIZE,
} from '../actions/types';

const initialState = {
  heart: {
    color: '#AA0000',
    size: 0.02,
  },
};

const heartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEART_COLOR:
      return {
        ...state,
        heart: {
          color: action.color,
          size: state.heart.size,
        },
      };
    case SET_HEART_SIZE:
      return {
        ...state,
        heart: {
          color: state.heart.color,
          size: action.size,
        },
      };
    default:
      return state;
  }
};

export default heartReducer;
