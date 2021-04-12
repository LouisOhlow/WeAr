// Defining all necessary schemas
export const ANIMATION_SCHEMA = 'Animation';
export const FILTER_SCHEMA = 'Filter';
export const AUGMENT_SCHEMA = 'Augment';
export const MEDIA_SCHEMA = 'Media';
export const MATERIAL_SCHEMA = 'Material';
export const SETTING_SCHEMA = 'Setting';

// Schema for the viro animation data
export const AnimationSchema = {
  name: ANIMATION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
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
    id: 'int',
    src: 'string',
    loop: { type: 'bool', default: true },
    delay: { type: 'int', default: 0 },
    run: { type: 'bool', default: true },
    height: { type: 'float', default: 1 },
    width: { type: 'float', default: 1 },
    scale: { type: 'float[]', default: [1, 1, 1] },
    position: { type: 'float[]', default: [0, 0, 0] },
    opacity: { type: 'string', default: '1' },
    rotation: { type: 'int', default: 0 },
    animation: 'string[]',
    animationReset: { type: 'bool', default: true },
  },
};

// schema for 3D meshes / objects
export const AugmentSchema = {
  name: AUGMENT_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    scale: { type: 'float[]', default: [1, 1, 1] },
    position: { type: 'float[]', default: [0, 0, 0] },
    rotation: { type: 'float[]', default: [0, 0, 0] },
    animation: { type: 'string[]', default: ['9'] },
    material: 'string[]',
    animationReset: { type: 'bool', default: true },
    delay: { type: 'int', default: 1000 },
    opacity: { type: 'string', default: '1' },
    loop: { type: 'bool', default: true },
    node: 'string',
  },
};

// schema for general AR filters
export const FilterSchema = {
  name: FILTER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    augments: 'string[]',
    media: 'string[]',
    settings: { type: 'string[]', default: [] },
    node: 'string',
    index: 'int',
    color: { type: 'string', default: '#CCCCCC' },
    deleted: { type: 'bool', default: false },
  },
};

// schema for a Material
export const MaterialSchema = {
  name: MATERIAL_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    shininess: { type: 'float', default: 0.1 },
    lightingModel: { type: 'string', default: 'Lambert' },
    diffuseColor: 'string',
  },
};

// schema for a Material
export const SettingSchema = {
  name: SETTING_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    label: 'string',
    type: 'string',
    forObject: 'string[]',
    forField: 'string[]',
    maxValue: { type: 'float', default: 0 },
    minValue: { type: 'float', default: 0 },
  },
};
