import { SET_FLOWER_COLOR, SET_FLOWER_VIDEO, SET_FLOWER_RATIO, ADD_FLOWER_ROTATION } from './types';

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

export const addFlowerRotation = (rotation) => (
  {
    type: ADD_FLOWER_ROTATION,
    rotation,
  }
);
