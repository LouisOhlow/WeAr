import { SET_FLOWER_COLOR, SET_FLOWER_VIDEO, SET_FLOWER_RATIO } from './types';

export const setFlowerColor = (primaryColor, secondaryColor) => (
  {
    type: SET_FLOWER_COLOR,
    primaryColor,
    secondaryColor,
  }
);

export const setFlowerVideo = (video) => (
  {
    type: SET_FLOWER_VIDEO,
    video,
  }
);

export const setFlowerRatio = (height, width) => (
  {
    type: SET_FLOWER_RATIO,
    height,
    width,
  }
);
