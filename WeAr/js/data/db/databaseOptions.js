import {
  FilterSchema, MediaSchema, AugmentSchema, AnimationSchema, MaterialSchema, MaterialListSchema,
} from './Schemas';

const databaseOptions = {
  schema: [
    FilterSchema, MediaSchema, AugmentSchema, AnimationSchema, MaterialSchema, MaterialListSchema
  ],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true,
};

export default databaseOptions;
