import { RUN_ANIMATION } from '../actions/types';

const initialState = {
  animation: {
    run: false,
  },
};

const animationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RUN_ANIMATION:
      return {
        ...state,
        animation: {
          run: action.run,
        },
      };
    default:
      return state;
  }
};

export default animationReducer;
