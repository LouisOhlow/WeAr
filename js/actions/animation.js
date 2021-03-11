import { RUN_ANIMATION } from './types';

export const runAnimation = (run) => (
  {
    type: RUN_ANIMATION,
    run: run,
  }
);
