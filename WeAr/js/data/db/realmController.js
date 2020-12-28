import Realm from 'realm';
import {
  animation, filter, mediaPlane, augments, material, materialList,
} from './animation';
import databaseOptions from './databaseOptions';
import {
  AnimationSchema, AugmentSchema, FilterSchema, MaterialListSchema, MaterialSchema, MediaSchema,
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
    filter.forEach((e) => {
      realm.create(FilterSchema.name, e);
    });
    mediaPlane.forEach((e) => {
      realm.create(MediaSchema.name, e);
    });
    augments.forEach((e) => {
      realm.create(AugmentSchema.name, e);
    });
    animation.forEach((e) => {
      realm.create(AnimationSchema.name, e);
    });
    material.forEach((e) => {
      realm.create(MaterialSchema.name, e);
    });
    materialList.forEach((e) => {
      realm.create(MaterialListSchema.name, e);
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
