import { SET_FLOWER_COLOR } from './types';

export const setFlowerColor = (primaryColor, secondaryColor) => (
  {
    type: SET_FLOWER_COLOR,
    primaryColor,
    secondaryColor,
  }
);
