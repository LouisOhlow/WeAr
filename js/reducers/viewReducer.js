import { SET_VIEW_INDEX } from '../actions/types';

const initialState = {
  view: {
    index: 0,
  },
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_INDEX:
      return {
        ...state,
        view: {
          index: action.index,
        },
      };
    default:
      return state;
  }
};

export default viewReducer;
