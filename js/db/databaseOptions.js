import {
  FilterSchema,
  MediaSchema,
  AugmentSchema,
  AnimationSchema,
  MaterialSchema,
  MaterialListSchema,
  SettingSchema,
} from './Schemas';

const databaseOptions = {
  schema: [
    FilterSchema,
    MediaSchema,
    AugmentSchema,
    AnimationSchema,
    MaterialSchema,
    MaterialListSchema,
    SettingSchema,
  ],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export default databaseOptions;
