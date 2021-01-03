import {
  getAnimationsByObject,
  getAugmentsByNode,
  getMaterialDataByNode,
  getMaterialIdsByNode,
  getMediaByNode,
} from '../../data/db/dataController';
import Realm from '../../data/db/Realm';
import { createData } from '../../data/db/realmController';
import { addResetAnimation, registerAnimations } from './ARAnimationHelper';
import { registerMaterials } from './ARMaterialHelper';

/**
   * connects to the Realm
   * sets up the augment and media objects for the scene depending on node and filter
   * registers all animations so they are ready to be used by the objects
   */
export default function setupAnimation(filter) {
  // const Realm = createData();

  const materialData = getMaterialDataByNode(Realm, filter.selectedNode, filter.selectedIndex);
  const materialIds = getMaterialIdsByNode(Realm, filter.selectedNode, filter.selectedIndex);
  const augments = getAugmentsByNode(Realm, filter.selectedNode, filter.selectedIndex);
  const media = getMediaByNode(Realm, filter.selectedNode, filter.selectedIndex);
  const augmentAnimations = addResetAnimation(getAnimationsByObject(Realm, augments), augments);
  const mediaAnimations = addResetAnimation(getAnimationsByObject(Realm, media), media);

  registerMaterials(materialData);
  registerAnimations(augmentAnimations, 'augment');
  registerAnimations(mediaAnimations, 'media');

  return { augments, media, materialIds };
}
