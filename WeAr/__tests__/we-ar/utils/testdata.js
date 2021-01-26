import SCREENS from '../../../js/navigation/navigationScreens';

const { flower } = SCREENS;

export const filter = [{
  id: 0,
  augments: ['1', '2', '3', '4', '5', '6', '7' ],
  materialList: ['0'],
  reusingMaterial: true,
  node: flower,
  animationReset: true,
  index: 0,
},
];

export const materialList = [{
  id: 0,
  material: ['0', '1'],
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
];

export const augments = [{
  id: 1,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0, 0, 0],
  animation: ['2', '4', '1'],
  delay: 1654,
},
{
  id: 2,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.075, 0.0215, 0.0575],
  animation: ['2', '4', '1'],
  delay: 234,
},
{
  id: 3,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.075, 0.00598, 0.05125],
  animation: ['2', '4', '1'],
  delay: 23,
},
{
  id: 4,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.06, 0.009725, -0.045],
  animation: ['2', '4', '1'],
  delay: 1545,
},
{
  id: 5,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.022, -0.0004, -0.052],
  animation: ['2', '4', '1'],
  delay: 1456,
},
{
  id: 6,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.03, 0.0174, 0.045],
  animation: ['2', '4', '1'],
  delay: 357,
},
];

export const mediaPlane = [{
  id: 1,
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
];
