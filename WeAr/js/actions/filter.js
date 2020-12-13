import { CHANGE_FILTER } from './types';

export const changeFilter = (filter) => (
  {
    type: CHANGE_FILTER,
    index: filter.index,
    node: filter.node,
  }
);
