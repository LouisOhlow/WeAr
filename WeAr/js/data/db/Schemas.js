// Defining all necessary schemas
export const ANIMATION_SCHEMA = 'Animation';
export const FILTER_SCHEMA = 'Filter';
export const AUGMENT_SCHEMA = 'Augment';
export const MEDIA_SCHEMA = 'Media';
export const MATERIAL_LIST_SCHEMA = 'MaterialList';
export const MATERIAL_SCHEMA = 'Material';

// Schema for the viro animation data
export const AnimationSchema = {
  name: ANIMATION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    opacity: { type: 'string', default: '+=0' },
    scaleX: { type: 'string', default: '+=0' },
    scaleY: { type: 'string', default: '+=0' },
    scaleZ: { type: 'string', default: '+=0' },
    rotateX: { type: 'string', default: '+=0' },
    rotateY: { type: 'string', default: '+=0' },
    rotateZ: { type: 'string', default: '+=0' },
    positionX: { type: 'string', default: '+=0' },
    positionY: { type: 'string', default: '+=0' },
    positionZ: { type: 'string', default: '+=0' },
    easing: { type: 'string', default: 'Bounce' },
    duration: { type: 'int', default: 10000 },
    index: 'int',
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
    height: { type: 'float', default: 1 },
    width: { type: 'float', default: 1 },
    scale: { type: 'float[]', default: [1, 1, 1] },
    position: { type: 'int[]', default: [0, 0, 0] },
    opacity: { type: 'string', default: '1' },
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
    scale: { type: 'float[]', default: [1, 1, 1] },
    position: { type: 'float[]', default: [0, 0, 0] },
    rotation: { type: 'float[]', default: [0, 0, 0] },
    animation: 'string[]',
    delay: { type: 'int', default: 1000 },
    opacity: { type: 'string', default: '1' },
    loop: { type: 'bool', default: true },
  },
};

// schema for general AR filters
export const FilterSchema = {
  name: FILTER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    augments: 'string[]',
    media: 'string[]',
    materialList: 'string[]',
    reusingMaterial: { type: 'bool', default: false },
    node: 'string',
    index: 'int',
  },
};

// schema for general AR filters
export const MaterialListSchema = {
  name: MATERIAL_LIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    material: 'string[]',
  },
};

export const MaterialSchema = {
  name: MATERIAL_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    shininess: { type: 'float', default: 0.0 },
    lightingModel: { type: 'string', default: 'Lambert' },
    diffuseColor: 'string',
  },
};
