import {
  FilterSchema, MediaSchema, AugmentSchema, AnimationSchema,
} from './Schemas';

const databaseOptions = {
  schema: [FilterSchema, MediaSchema, AugmentSchema, AnimationSchema],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export default databaseOptions;
