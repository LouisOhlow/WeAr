import Realm from 'realm';
import {
  animation, filter, mediaPlane, augments,
} from './animation';
import {
  AnimationSchema, AugmentSchema, FilterSchema, MediaSchema,
} from './Schemas';

export const createData = () => {
  const realm = new Realm({
    schema: [FilterSchema, MediaSchema, AugmentSchema, AnimationSchema],
    schemaVersion: 0,
    deleteRealmIfMigrationNeeded: true,
  });

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
  });
  return realm;
};

export const openRealm = () => {
  const realm = new Realm({
    schema: [FilterSchema, MediaSchema, AugmentSchema, AnimationSchema],
    schemaVersion: 0,
    deleteRealmIfMigrationNeeded: true,
  });
  return realm;
};

export const cleanAllData = () => {
  const realm = new Realm({
    schema: [FilterSchema, MediaSchema, AugmentSchema, AnimationSchema],
    schemaVersion: 0,
    deleteRealmIfMigrationNeeded: true,
  });

  realm.write(() => {
    realm.deleteAll();
  });
  return realm;
};

export const closeRealm = (realm) => {
  if (realm !== null && !realm.isClosed) {
    realm.close();
  }
};
