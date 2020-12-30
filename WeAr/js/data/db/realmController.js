import Realm from 'realm';
import {
  animation, filter, mediaPlane, augments, material, materialList,
} from './animation';
import databaseOptions from './databaseOptions';
import {
  ANIMATION_SCHEMA,
  AUGMENT_SCHEMA,
  FILTER_SCHEMA,
  MATERIAL_LIST_SCHEMA,
  MATERIAL_SCHEMA,
  MEDIA_SCHEMA,
} from './Schemas';

/**
  * writes the data from the animation file into the database
  *
  * @returns {object} the database realm connection
  */
export const createData = () => {
  const realm = new Realm(databaseOptions);

  realm.write(() => {
    realm.deleteAll();
  });

  realm.write(() => {
    filter.forEach((f) => {
      realm.create(FILTER_SCHEMA, f);
    });
    mediaPlane.forEach((m) => {
      realm.create(MEDIA_SCHEMA, m);
    });
    augments.forEach((a) => {
      realm.create(AUGMENT_SCHEMA, a);
    });
    animation.forEach((an) => {
      realm.create(ANIMATION_SCHEMA, an);
    });
    material.forEach((mat) => {
      realm.create(MATERIAL_SCHEMA, mat);
    });
    materialList.forEach((matL) => {
      realm.create(MATERIAL_LIST_SCHEMA, matL);
    });
  });
  return realm;
};

/**
 * opens the realm
 *
 * @returns {object} the database realm connection
 */
export const openRealm = () => {
  const realm = new Realm(databaseOptions);
  return realm;
};

/**
 * cleans the complete realm
 *
 * @returns {object} the database realm connection
 */
export const cleanAllData = () => {
  const realm = new Realm(databaseOptions);

  realm.write(() => {
    realm.deleteAll();
  });
  return realm;
};

/**
 * closes the realm connection if it is open
 *
 * @param {object} realm the open realm connection
 */
export const closeRealm = (realm) => {
  if (realm !== null && !realm.isClosed) {
    realm.close();
  }
};
