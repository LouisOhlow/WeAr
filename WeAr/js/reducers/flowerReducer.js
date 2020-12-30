import { SET_FLOWER_COLOR } from '../actions/types';

const initialState = {
  flower: {
    primaryColor: '#444400',
    secondaryColor: '#555555',
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
        },
      };
    default:
      return state;
  }
};

export default flowerReducer;
