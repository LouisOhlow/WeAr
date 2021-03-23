import {
  FilterSchema,
  MediaSchema,
  AugmentSchema,
  AnimationSchema,
  MaterialSchema,
  SettingSchema,
} from './Schemas';

const databaseOptions = {
  schema: [
    FilterSchema,
    MediaSchema,
    AugmentSchema,
    AnimationSchema,
    MaterialSchema,
    SettingSchema,
  ],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export default databaseOptions;
