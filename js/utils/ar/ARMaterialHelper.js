import { ViroMaterials } from '@viro-community/react-viro';

/**
 * creates an object of all materials
 * registers them so they can be used for an 3DObject
 *
 * @param {objects[]} materials a list of materials to be registered
 */
export const registerMaterials = (materialData) => {
  ViroMaterials.createMaterials(materialData);
};
