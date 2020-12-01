// Defining all necessary schemas
export const ANIMATION_SCHEMA = 'Animation';
export const FILTER_SCHEMA = 'Filter';
export const AUGMENT_SCHEMA = 'Augment';
export const MEDIA_SCHEMA = 'Media';

// Schema foe the viro animation data
export const AnimationSchema = {
  name: ANIMATION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    opacity: { type: 'string', default: '1.0' },
    scaleX: { type: 'string', default: '1' },
    scaleY: { type: 'string', default: '1' },
    scaleZ: { type: 'string', default: '1' },
    rotateX: { type: 'string', default: '0' },
    rotateY: { type: 'string', default: '0' },
    rotateZ: { type: 'string', default: '0' },
    positionX: { type: 'string', default: '0' },
    positionY: { type: 'string', default: '0' },
    positionZ: { type: 'string', default: '0' },
    easing: { type: 'string', default: 'Linear' },
    duration: { type: 'int', default: 10000 },
  },
};

// schema for media plane data (added photo or video)
export const MediaSchema = {
  name: MEDIA_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    type: 'string',
    loop: { type: 'bool', default: true },
    video: 'bool',
    delay: { type: 'int', default: 0 },
    run: { type: 'bool', default: true },
    height: { type: 'int', default: 1 },
    width: { type: 'int', default: 1 },
    position: { type: 'int[]', default: [0, 0, 0] },
    animation: 'string[]',
  },
};

// schema for 3D meshes / objects
export const AugmentSchema = {
  name: AUGMENT_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    obj: 'string',
    material: 'string',
    scale: { type: 'int[]', default: [1, 1, 1] },
    position: { type: 'int[]', default: [0, 0, 0] },
    rotation: { type: 'int[]', default: [0, 0, 0] },
    animation: 'string[]',
  },
};

// schema for general AR filters
export const FilterSchema = {
  name: FILTER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    meshes: 'string[]',
    media: 'string[]',
    node: 'string',
    basic: { type: 'bool', default: false },
  },
};

const databaseOptions = {
  path: 'WEAR.realm',
  schema: [FilterSchema, MediaSchema, AugmentSchema, AnimationSchema],
};
