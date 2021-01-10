import { SET_HEART_SIZE, SET_HEART_COLOR } from './types';

export const setHeartColor = (color) => (
  {
    type: SET_HEART_COLOR,
    color,
  }
);

export const setHeartSize = (size) => (
  {
    type: SET_HEART_SIZE,
    size,
  }
);
