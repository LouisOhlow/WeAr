import { addResetAnimation, registerAnimations } from './ARAnimationHelper';
import { getAnimationsByObject, getAugmentsByNode, getMediaByNode } from '../../data/db/dataController';

export const getCurrentAugments = (realm, node, index) => {
  const augments = getAugmentsByNode(realm, node, index);
  return augments;
};

export const getCurrentMedia = (realm, node, index) => {
  const media = getMediaByNode(realm, node, index);
  return media;
};

export const setupCurrentAnimation = (realm, augments, media) => {
  const augmentAnimations = addResetAnimation(getAnimationsByObject(realm, augments), augments);
  const mediaAnimations = addResetAnimation(getAnimationsByObject(realm, media), media);

  registerAnimations(augmentAnimations, 'augment');
  registerAnimations(mediaAnimations, 'media');
};
