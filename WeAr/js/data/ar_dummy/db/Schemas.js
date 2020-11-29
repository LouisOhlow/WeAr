import Realm from 'realm';

// Defining all necessaey schemas
export const ANIMATION_SCHEMA = 'Animation';
export const FILTER_SCHEMA = 'Filter';
export const MESH_SCHEMA = 'Meshes';
export const MEDIA_SCHEMA = 'Media';

// Schema foe the viro animation data
export const AnimationSchema = {
  name: ANIMATION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    opacity: { type: 'float', default: 1.0 },
    scaleX: { type: 'int', default: 1 },
    scaleY: { type: 'int', default: 1 },
    scaleZ: { type: 'int', default: 1 },
    rotateX: { type: 'int', default: 0 },
    rotateY: { type: 'int', default: 0 },
    rotateZ: { type: 'int', default: 0 },
    positionX: { type: 'int', default: 0 },
    positionY: { type: 'int', default: 0 },
    positionZ: { type: 'int', default: 0 },
    easing: { type: 'string', default: 'Linear' },
    duration: { type: 'int', default: 10000 },
  },
};

// schema for media plane data (added photo or video)
export const MediaSchema = {
  name: MEDIA_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    type: 'string',
    loop: { type: 'bool', default: true },
    video: 'bool',
    delay: { type: 'int', default: 0 },
    run: { type: 'bool', default: true },
    height: { type: 'int', default: 1 },
    width: { type: 'int', default: 1 },
    position: { type: 'int[]', default: [0, 0, 0] },
    animation: ANIMATION_SCHEMA,
  },
};

// schema for 3D meshes / objects
export const MeshSchema = {
  name: MESH_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    object: 'string',
    material: 'string',
    scale: { type: 'int[]', default: [1, 1, 1] },
    position: { type: 'int[]', default: [0, 0, 0] },
    rotation: { type: 'int[]', default: [0, 0, 0] },
    animation: ANIMATION_SCHEMA,
  },
};

// schema for general AR filters
export const FilterSchema = {
  name: FILTER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    meshes: { type: 'list', objectType: MESH_SCHEMA },
    media: { type: 'list', objectType: FILTER_SCHEMA },
    node: 'string',
    basic: { type: 'bool', default: false },
  },
};

const databaseOptions = {
  path: 'WEAR.realm',
  schema: [FilterSchema, MediaSchema, MeshSchema, AnimationSchema],
};

