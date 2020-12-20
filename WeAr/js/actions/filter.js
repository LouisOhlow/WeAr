import { SET_FILTER_NODE } from './types';
import { SET_FILTER_INDEX } from './types';

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
