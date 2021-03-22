import { SET_FILTER_NODE, SET_FILTER_INDEX, SET_OBJECTS, SET_MEDIA, SET_AUGMENTS } from './types';

export const setFilterNode = (node) => (
  {
    type: SET_FILTER_NODE,
    node,
  }
);

export const setFilterIndex = (index) => (
  {
    type: SET_FILTER_INDEX,
    index,
  }
);

export const setSelectedObjects = (augments, media, material) => (
  {
    type: SET_OBJECTS,
    augments,
    media,
    material,
  }
);

export const setAugments = (augments) => (
  {
    type: SET_AUGMENTS,
    augments,
  }
);

export const setMedia = (media) => (
  {
    type: SET_MEDIA,
    media,
  }
);
