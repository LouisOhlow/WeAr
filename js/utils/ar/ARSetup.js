import { ViroAnimations } from '@viro-community/react-viro';
import {
  getAnimationsByObject,
  getAugmentsByNode,
  getMaterialDataByNode,
  getMaterialIdsByNode,
  getMediaByNode,
} from '../../db/dataController';
import { addResetAnimation, prepareAnimationObject } from './ARAnimationHelper';
import registerImageTargets from './ARImageTargetHelper';
import { registerMaterials } from './ARMaterialHelper';

/**
 * connects to the Realm
 * sets up the augment and media objects for the scene depending on node and filter
 * registers all animations so they are ready to be used by the objects
 * @param {object} filter filter object which contains the selected Node and index
 * @returns {object} returns the augments, media plane and material IDs from the selected filter
 */
export default function setupAnimation(filter) {
  const materialData = getMaterialDataByNode(filter.selectedNode, filter.selectedIndex);
  const materialIds = getMaterialIdsByNode(filter.selectedNode, filter.selectedIndex);
  const augments = getAugmentsByNode(filter.selectedNode, filter.selectedIndex);
  const media = getMediaByNode(filter.selectedNode, filter.selectedIndex);
  const augmentAnimations = addResetAnimation(getAnimationsByObject(augments), augments);
  const mediaAnimations = addResetAnimation(getAnimationsByObject(media), media);

  registerImageTargets();
  registerMaterials(materialData);
  ViroAnimations.registerAnimations(prepareAnimationObject(augmentAnimations, 'augment'));
  ViroAnimations.registerAnimations(prepareAnimationObject(mediaAnimations, 'media'));

  return { augments, media, materialIds };
}
