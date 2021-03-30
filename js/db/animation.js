import SCREENS from '../navigation/navigationScreens';

const { flower, heart, metal } = SCREENS;

export const SETTING_TYPES = {
  color: 'color',
  rotate: 'rotate',
  replaceVideo: 'replaceVideo',
  slider: 'slider',
};

export const filter = [{
  id: 0,
  augments: ['1', '2', '3'],
  media: ['29'],
  reusingMaterial: true,
  node: flower,
  settings: ['0', '1', '2', '8', '9'],
  animationReset: true,
  index: 0,
},
{
  id: 1,
  augments: ['25'],
  reusingMaterial: true,
  settings: ['6', '7'],
  node: heart,
  index: 0,
},
{
  id: 2,
  augments: ['26', '27', '28', '29', '30'],
  reusingMaterial: true,
  settings: ['3', '10', '13', '4', '11', '14', '5', '12', '15', '16', '17'],
  node: metal,
  index: 0,
},
];

export const material = [{
  id: 0,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#590000',
},
{
  id: 1,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#004500',
},
{
  id: 2,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#AA0000',
},
{
  id: 3,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#CCCCCC',
},
{
  id: 4,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#CCCCCC',
},
{
  id: 5,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#CCCCCC',
},
{
  id: 6,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#CC0000',
},
{
  id: 7,
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#000000',
},
];

export const augments = [{
  id: 1,
  scale: [0, 0, 0],
  position: [0, 0, 0],
  animation: ['2', '4', '1'],
  material: ['0', '1'],
  delay: 1654,
  node: flower,
},
{
  id: 2,
  scale: [0, 0, 0],
  position: [0.075, 0.0215, 0.0575],
  animation: ['2', '4', '1'],
  material: ['0', '1'],
  delay: 234,
  node: flower,
},
{
  id: 3,
  scale: [0, 0, 0],
  position: [-0.075, 0.00598, 0.05125],
  animation: ['2', '4', '1'],
  material: ['0', '1'],
  delay: 23,
  node: flower,
},
{
  id: 25,
  scale: [0.02, 0.02, 0.02],
  position: [0, 0, 0],
  rotation: [270, 0, 90],
  animationReset: false,
  animation: ['7', '8'],
  material: ['2'],
  delay: 900,
  node: flower,
},
{
  id: 26,
  scale: [0.0015, 0.0015, 0.0015],
  position: [0, 0, 0],
  rotation: [20, 0, 45],
  animationReset: false,
  animation: ['12'],
  material: ['3'],
  delay: 0,
  node: metal,
},
{
  id: 27,
  scale: [0.0013, 0.0013, 0.0013],
  position: [0, 0, 0],
  rotation: [45, 20, 0],
  animationReset: false,
  animation: ['11'],
  material: ['4'],
  delay: 0,
  node: metal,
},
{
  id: 28,
  scale: [0.0012, 0.0012, 0.0012],
  position: [0, 0, 0],
  rotation: [0, 45, 20],
  animationReset: false,
  animation: ['10'],
  material: ['5'],
  delay: 0,
  node: metal,
},
{
  id: 29,
  scale: [0.02, 0.02, 0.02],
  animationReset: false,
  material: ['6'],
  animation: ['15', '15', '15', '15', '15', '14', '13', '15', '15', '15', '14', '13', '15', '15', '15', '15', '15', '15', '15', '14', '13'],
  delay: 200,
  node: 'metal_we',
},
{
  id: 30,
  scale: [0.02, 0.02, 0.02],
  animationReset: false,
  material: ['7'],
  animation: ['14', '13', '15', '15', '15', '14', '13', '15', '15', '15', '15', '15', '15', '15', '14', '13'],
  delay: 0,
  node: 'metal_ar',
},
];

export const mediaPlane = [{
  id: 29,
  src: 'basic',
  type: 'mov',
  loop: true,
  opacity: '0',
  delay: 4000,
  run: true,
  height: 1.5,
  width: 1.5,
  position: [0, 0, -0.025],
  scale: [0.1, 0.1, 0.1],
  animation: ['5', '6'],
},
];

export const animation = [{
  id: 1,
  positionX: '+=1',
  positionZ: '+=1',
  scaleX: '0',
  scaleY: '0',
  scaleZ: '0',
  rotateY: '500',
  easing: 'EaseIn',
  duration: 3000,
  index: 0,
},
{
  id: 2,
  scaleX: '0.005',
  scaleY: '0.005',
  scaleZ: '0.005',
  rotateY: '90',
  opacity: '1.0',
  easing: 'Bounce',
  duration: 600,
  index: 0,
},
{
  id: 4,
  easing: 'Linear',
  duration: 5000,
  rotateY: '500',
  index: 0,
},
{
  id: 5,
  opacity: '1.0',
  easing: 'EaseIn',
  duration: 2000,
  index: 0,
},
{
  id: 6,
  opacity: '1',
  easing: 'Easing',
  duration: 6600,
  index: 0,
},
{
  id: 7,
  scaleX: '+=0.015',
  scaleY: '+=0.015',
  scaleZ: '+=0.015',
  easing: 'Easing',
  duration: 100,
  index: 0,
},
{
  id: 8,
  scaleX: '-=0.015',
  scaleY: '-=0.015',
  scaleZ: '-=0.015',
  easing: 'Bounce',
  duration: 100,
  index: 0,
},
{
  id: 9,
  easing: 'Linear',
  duration: 900,
  index: 0,
},
{
  id: 10,
  easing: 'Linear',
  duration: 500,
  rotateX: '+=0',
  rotateY: '+=16',
  rotateZ: '+=0',
  index: 0,
},
{
  id: 11,
  easing: 'Linear',
  duration: 500,
  rotateX: '+=0',
  rotateY: '-=22',
  rotateZ: '+=0',
  index: 0,
},
{
  id: 12,
  easing: 'Linear',
  duration: 500,
  rotateX: '+=0',
  rotateY: '-=11',
  rotateZ: '+=0',
  index: 0,
},
{
  id: 13,
  easing: 'Linear',
  duration: 10,
  opacity: '1.0',
  index: 0,
},
{
  id: 14,
  easing: 'Linear',
  duration: 10,
  opacity: '0.0',
  index: 0,
},
{
  id: 15,
  easing: 'Linear',
  duration: 200,
  opacity: '0.0',
  index: 0,
},
];

export const setting = [{
  id: 0,
  label: 'outer color',
  type: SETTING_TYPES.color,
  forObject: ['0'],
  forField: ['diffuseColor'],
},
{
  id: 1,
  label: 'inner color',
  type: SETTING_TYPES.color,
  forObject: ['1'],
  forField: ['diffuseColor'],
},
{
  id: 2,
  label: 'replace video',
  type: SETTING_TYPES.replaceVideo,
  forObject: ['29'],
  forField: ['source'],
},
{
  id: 3,
  label: 'first wire - color',
  type: SETTING_TYPES.color,
  forObject: ['0-0'],
  forField: ['diffuseColor'],
},
{
  id: 4,
  label: 'second wire - color',
  type: SETTING_TYPES.color,
  forObject: ['1-0'],
  forField: ['diffuseColor'],
},
{
  id: 5,
  label: 'third wire - color',
  type: SETTING_TYPES.color,
  forObject: ['2-0'],
  forField: ['diffuseColor'],
},
{
  id: 6,
  label: 'color heart color',
  type: SETTING_TYPES.color,
  forObject: ['0-0'],
  forField: ['diffuseColor'],
},
{
  id: 7,
  label: 'heart size',
  type: SETTING_TYPES.slider,
  forObject: ['25'],
  forField: ['scale-0', 'scale-1', 'scale-2'],
},
{
  id: 8,
  label: 'rotate video',
  type: SETTING_TYPES.rotate,
  forObject: ['29'],
  forField: ['rotateX'],
},
{
  id: 9,
  label: 'video ratio',
  type: SETTING_TYPES.slider,
  forObject: ['29'],
  forField: ['scaleX'],
},
{
  id: 10,
  label: 'first wire - size',
  type: SETTING_TYPES.slider,
  forObject: ['26'],
  forField: ['scale-0', 'scale-1', 'scale-2'],
},
{
  id: 11,
  label: 'second wire - size',
  type: SETTING_TYPES.slider,
  forObject: ['27'],
  forField: ['scale-0', 'scale-1', 'scale-2'],
},
{
  id: 12,
  label: 'third wire - size',
  type: SETTING_TYPES.slider,
  forObject: ['28'],
  forField: ['scale-0', 'scale-1', 'scale-2'],
},
{
  id: 13,
  label: 'first wire - angle',
  type: SETTING_TYPES.slider,
  forObject: ['26'],
  forField: ['rotation-0'],
},
{
  id: 14,
  label: 'second wire - angle',
  type: SETTING_TYPES.slider,
  forObject: ['27'],
  forField: ['rotation-0'],
},
{
  id: 15,
  label: 'third wire - angle',
  type: SETTING_TYPES.slider,
  forObject: ['28'],
  forField: ['rotation-2'],
},
{
  id: 16,
  label: 'WE - color',
  type: SETTING_TYPES.color,
  forObject: ['0-0'],
  forField: ['diffuseColor'],
},
{
  id: 17,
  label: 'AR - color',
  type: SETTING_TYPES.color,
  forObject: ['0-0'],
  forField: ['diffuseColor'],
},
];
