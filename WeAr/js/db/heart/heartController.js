import SCREENS from '../../navigation/navigationScreens';
import {
  getAugmentsByNode,
  getFiltersByNode,
  getMaterialIdsByNode,
  getMaxIdBySchema,
  getSelectedFilter,
} from '../dataController';
import realmConnection from '../Realm';
import {
  AUGMENT_SCHEMA,
  FILTER_SCHEMA, MATERIAL_LIST_SCHEMA, MATERIAL_SCHEMA,
} from '../Schemas';

/**
 * uses the given data to post a new filter, material, materialList and media to the DB
 *
 * @param {object} data the heart data from the redux store
 */
export function createHeart(data) {
  const {
    color, size,
  } = data;

  const allFilters = getFiltersByNode(SCREENS.heart);
  const index = allFilters.sorted('index')[allFilters.length - 1].index + 1;

  const id = getMaxIdBySchema(FILTER_SCHEMA);
  const mat1Id = getMaxIdBySchema(MATERIAL_SCHEMA);
  const matListId = getMaxIdBySchema(MATERIAL_LIST_SCHEMA);
  const augmentId = getMaxIdBySchema(AUGMENT_SCHEMA);

  createMaterial(mat1Id, matListId, color);
  createFilter(id, index, augmentId, matListId);
  createAugment(augmentId, size);
}

/**
 * deletes the heart filter by wheel index
 *
 * @param {number} index
 */
export function deleteHeart(index) {
  const Realm = realmConnection;
  const filter = getSelectedFilter(SCREENS.heart, index);
  const material = getMaterialIdsByNode(SCREENS.heart, index);
  const mat = realmConnection.objects(MATERIAL_SCHEMA).filtered(`id = '${material[0][0]}'`);
  const materialList = Realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${filter.materialList}'`);
  const augment = getAugmentsByNode(SCREENS.heart, index)[0];

  Realm.write(() => {
    Realm.delete(filter);
    Realm.delete(materialList);
    Realm.delete(mat);
    Realm.delete(augment);
  });
}

/**
 * @param {string} id id from the new filter
 * @param {number} index the filter index to position it in the bubble wheel
 * @param {string} augmentId foreign key from the augment
 * @param {string} matListId foreign key from the material list
 */
function createFilter(id, index, augmentId, matListId) {
  const Realm = realmConnection;
  const newFilter = {
    id,
    augments: [`${augmentId}`],
    materialList: [`${matListId}`],
    reusingMaterial: true,
    node: SCREENS.heart,
    index,
  };
  Realm.write(() => {
    Realm.create(FILTER_SCHEMA, newFilter);
  });
}

/**
 * creates a new material and materialList object in the DB
 *
 * @param {string} mat1Id the material ID
 * @param {string} matListId the material List ID
 */
function createMaterial(matId, matListId, color) {
  const Realm = realmConnection;
  const mat = {
    id: matId,
    diffuseColor: color,
  };

  const matList = {
    id: matListId,
    material: [`${matId}`],
  };

  Realm.write(() => {
    Realm.create(MATERIAL_SCHEMA, mat);
    Realm.create(MATERIAL_LIST_SCHEMA, matList);
  });
}

/**
 * creates a new material and materialList object in the DB
 *
 * @param {string} mat1Id the material ID
 * @param {string} matListId the material List ID
 */
function createAugment(augmentId, size) {
  const Realm = realmConnection;
  const augment = {
    id: augmentId,
    obj: 'heart',
    material: 'heart',
    scale: [size, size, size],
    position: [0, 0, 0],
    rotation: [270, 0, 90],
    animationReset: false,
    animation: ['7', '8', '9'],
    delay: 0,
  };

  Realm.write(() => {
    Realm.create(AUGMENT_SCHEMA, augment);
  });
}
