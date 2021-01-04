import { SET_FLOWER_COLOR, SET_FLOWER_VIDEO, SET_FLOWER_RATIO } from './types';

export const setFlowerColor = (primaryColor, secondaryColor) => (
  {
    type: SET_FLOWER_COLOR,
    primaryColor,
    secondaryColor,
  }
);

export const setFlowerVideo = (src) => (
  {
    type: SET_FLOWER_VIDEO,
    src,
  }
);

export const setFlowerRatio = (height, width) => (
  {
    type: SET_FLOWER_RATIO,
    height,
    width,
  }
);
