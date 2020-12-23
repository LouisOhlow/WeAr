import { SET_FILTER_NODE, SET_FILTER_INDEX, SET_OBJECTS } from './types';

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

export const setSelectedObjects = (augments, media) => (
  {
    type: SET_OBJECTS,
    augments,
    media,
  }
);
