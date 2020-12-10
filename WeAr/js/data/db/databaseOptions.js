import {
  FilterSchema, MediaSchema, AugmentSchema, AnimationSchema,
} from './schemas';

const databaseOptions = {
  schema: [FilterSchema, MediaSchema, AugmentSchema, AnimationSchema],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export default databaseOptions;
