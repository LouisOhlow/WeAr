import realmConnection from './Realm';
import {
  ANIMATION_SCHEMA,
  AUGMENT_SCHEMA,
  FILTER_SCHEMA,
  MATERIAL_LIST_SCHEMA,
  MATERIAL_SCHEMA,
  MEDIA_SCHEMA,
} from './Schemas';

/**
 * gets the filterlist for a node
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @returns {object[]}
 */
export const getFiltersByNode = (node) => {
  const realm = realmConnection;
  const filters = realm.objects(FILTER_SCHEMA).filtered(`node = '${node}'`);
  return filters.sorted('index');
};

/**
 * gets the Filter from the db by node and index
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object} Filter object with info about all augments and media objects in the scene
 */
export const getSelectedFilter = (node, index) => {
  const realm = realmConnection;
  const filters = realm.objects(FILTER_SCHEMA).filtered(`node = '${node}'`);
  return filters.sorted('index')[index];
};

/**
 * gets all Augments from the Realm
 *
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object[]} list of augments
 */
export const getAugmentsByNode = (node, index) => {
  const realm = realmConnection;
  const filter = getSelectedFilter(node, index);
  const augmentIds = filter.augments;
  const augments = [];
  augmentIds.forEach((id) => {
    const augment = realm.objects(AUGMENT_SCHEMA).filtered(`id = '${id}'`);
    augments.push(augment[0]);
  });
  return augments;
};

/**
 * gets all Media objects from the Realm
 *
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object[]} list of media objects
 */
export const getMediaByNode = (node, index) => {
  const realm = realmConnection;
  const filter = getSelectedFilter(node, index);
  const mediaIds = filter.media;
  const media = [];
  mediaIds.forEach((id) => {
    const mediaPlane = realm.objects(MEDIA_SCHEMA).filtered(`id = '${id}'`);
    media.push(mediaPlane[0]);
  });
  return media;
};

/**
 * gets all MaterialIds from the Realm
 * the index from the material syncs with the index from the augment list from each filter
 *
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object[]} list of material IDs
 */
export const getMaterialIdsByNode = (node, index) => {
  const realm = realmConnection;
  const filter = getSelectedFilter(node, index);
  const { materialList, reusingMaterial, augments } = filter;
  const materials = [];

  if (reusingMaterial) {
    const id = materialList[0];
    const matListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${id}'`);
    augments.forEach(() => {
      materials.push(matListObject[0].material);
    });
  } else {
    materialList.forEach((id) => {
      const matListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${id}'`);
      materials.push(matListObject[0].material);
    });
  }

  return materials;
};

/**
 * gets all MaterialObjects from the Realm
 *
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object[]} list of material objects
 */
export const getMaterialDataByNode = (node, index) => {
  const realm = realmConnection;
  const filter = getSelectedFilter(node, index);
  const { materialList } = filter;
  const materialData = {};

  materialList.forEach((listId) => {
    const materialListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${listId}'`);

    const { material } = materialListObject[0];
    material.forEach((matId) => {
      const materialObject = realm.objects(MATERIAL_SCHEMA).filtered(`id = '${matId}'`);

      const {
        id, shininess, lightingModel, diffuseColor,
      } = materialObject[0];

      materialData[id] = {
        shininess,
        lightingModel,
        diffuseColor,
      };
    });
  });
  return materialData;
};

/**
 * gets all Animations for the objects from the realm
 *
 * @param {object} realm the database connection
 * @param {objects[]} objects either an array of augments or media objects
 * @returns {object[]} all animations which are needed in this scene
 */
export const getAnimationsByObject = (objects) => {
  const realm = realmConnection;
  const allAnimations = [];

  objects.forEach((object, objectIndex) => {
    const objectAnimations = [];

    object.animation.forEach((id) => {
      const animation = realm.objects(ANIMATION_SCHEMA).filtered(`id = '${id}'`);
      objectAnimations.push(animation[0]);
    });

    allAnimations[objectIndex] = objectAnimations;
  });
  return allAnimations;
};

/**
 * returns the max number for a constant ID
 *
 * @param {string} Schema the schema name
 */
export const getMaxIdBySchema = (Schema) => {
  const objects = realmConnection.objects(Schema).sorted('id');
  const { id } = objects[objects.length - 1];
  return id + 1;
};
