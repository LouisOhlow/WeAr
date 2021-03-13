import { SET_VIEW_INDEX } from './types';

export const setViewIndex = (index) => (
  {
    type: SET_VIEW_INDEX,
    index,
  }
);
