import SCREENS from '../../../navigation/navigationScreens';
import { getMaxIdBySchema } from '../dataController';
import Realm from '../Realm';
import {
  FILTER_SCHEMA, MATERIAL_LIST_SCHEMA, MATERIAL_SCHEMA, MEDIA_SCHEMA,
} from '../Schemas';

/**
 * 
 * @param {*} data 
 */
function createFlower(data) {
  const {
    primaryColor, secondaryColor, src, height, width, rotation,
  } = data;

  const allFilters = Realm.objects(FILTER_SCHEMA);
  const index = allFilters.sorted('index')[allFilters.length - 1].index + 1;

  const id = `f-${getMaxIdBySchema(FILTER_SCHEMA)}`;
  const mat1Id = `mat-${getMaxIdBySchema(MATERIAL_SCHEMA)}`;
  const mat2Id = `mat-${getMaxIdBySchema(MATERIAL_SCHEMA) + 1}`;
  const matListId = `flower-${getMaxIdBySchema(MATERIAL_LIST_SCHEMA)}-mat`;
  const mediaId = `mat-${getMaxIdBySchema(MEDIA_SCHEMA)}`;

  createMaterial(mat1Id, mat2Id, matListId, primaryColor, secondaryColor);
  createMediaPlane(mediaId, src, height, width, rotation);
  createFilter(id, index, mediaId, matListId);
}

/**
 * 
 * @param {*} id 
 * @param {*} index 
 * @param {*} mediaId 
 * @param {*} matListId 
 */
function createFilter(id, index, mediaId, matListId) {
  const newFilter = {
    id,
    augments: ['o-1', 'o-2', 'o-3', 'o-4', 'o-5', 'o-6', 'o-7', 'o-8', 'o-9', 'o-10', 'o-11', 'o-12', 'o-13', 'o-14', 'o-15', 'o-16', 'o-17', 'o-18', 'o-19', 'o-20', 'o-21', 'o-22', 'o-23'],
    media: [mediaId],
    materialList: [matListId],
    reusingMaterial: true,
    node: SCREENS.flower,
    index,
  };
  Realm.write(() => {
    Realm.create(FILTER_SCHEMA, newFilter);
  });
}

/**
 * 
 * @param {*} primaryColor 
 * @param {*} secondaryColor 
 */
function createMaterial(mat1Id, mat2Id, matListId, primaryColor, secondaryColor) {
  const mat1 = {
    id: mat1Id,
    diffuseColor: primaryColor,
  };

  const mat2 = {
    id: mat2Id,
    diffuseColor: secondaryColor,
  };

  const matList = {
    id: matListId,
    material: [mat1Id, mat2Id],
  };

  Realm.write(() => {
    Realm.create(MATERIAL_SCHEMA, mat1);
    Realm.create(MATERIAL_SCHEMA, mat2);
    Realm.create(MATERIAL_LIST_SCHEMA, matList);
  });

  return matListId;
}

/**
 * 
 * @param {*} src 
 * @param {*} height 
 * @param {*} width 
 * @param {*} rotation 
 */
function createMediaPlane(id, src, height, width, rotation) {
  const mediaPlane = {
    id,
    src,
    height,
    width,
    scale: [0.1, 0.1, 0.1],
    delay: 4000,
    opacity: '0',
    rotation,
    animation: ['a-5', 'a-6'],
  };

  Realm.write(() => {
    Realm.create(MEDIA_SCHEMA, mediaPlane);
  });
}

export default createFlower;
