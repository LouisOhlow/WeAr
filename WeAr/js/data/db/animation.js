import SCREENS from '../../navigation/navigationScreens';

const { flower, heart } = SCREENS;

export const filter = [{
  id: 0,
  augments: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  media: ['1'],
  materialList: ['0'],
  reusingMaterial: true,
  node: flower,
  animationReset: true,
  index: 0,
},
{
  id: 1,
  augments: ['24'],
  materialList: ['1'],
  reusingMaterial: true,
  node: heart,
  index: 0,
},
{
  id: 2,
  augments: ['25'],
  materialList: ['2'],
  reusingMaterial: true,
  node: heart,
  index: 1,
},
];

export const materialList = [{
  id: 0,
  material: ['0', '1'],
},
{
  id: 1,
  material: ['2'],
},
{
  id: 2,
  material: ['3'],
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
  diffuseColor: '#AAAAAA',
},
];

export const augments = [{
  id: 1,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0, 0, 0],
  animation: ['2', '4', '1'],
  delay: 1700,
},
{
  id: 2,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.05, 0.01, 0.03],
  animation: ['2', '4', '1'],
  delay: 200,
},
{
  id: 3,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.05, 0.003, 0.05],
  animation: ['2', '4', '1'],
  delay: 0,
},
{
  id: 4,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.04, 0.005, -0.04],
  animation: ['2', '4', '1'],
  delay: 1500,
},
{
  id: 5,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.015, -0.001, -0.045],
  animation: ['2', '4', '1'],
  delay: 1400,
},
{
  id: 6,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.02, 0.012, 0.04],
  animation: ['2', '4', '1'],
  delay: 350,
},
{
  id: 7,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.02, 0.019, 0.005],
  animation: ['2', '4', '1'],
  delay: 1350,
},
{
  id: 8,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.02, 0.012, -0.045],
  animation: ['2', '4', '1'],
  delay: 1250,
},
{
  id: 9,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.043, 0.007, -0.027],
  animation: ['2', '4', '1'],
  delay: 750,
},
{
  id: 10,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.02, 0.009, 0.03],
  animation: ['2', '4', '1'],
  delay: 700,
},
{
  id: 11,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.02, 0.01, -0.02],
  animation: ['2', '4', '1'],
  delay: 850,
},
{
  id: 12,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.037, 0.012, -0.065],
  animation: ['2', '4', '1'],
  delay: 500,
},
{
  id: 13,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.01, 0.005, -0.025],
  animation: ['2', '4', '1'],
  delay: 50,
},
{
  id: 14,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.024, 0.008, 0.0012],
  animation: ['2', '4', '1'],
  delay: 1100,
},
{
  id: 15,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.002, 0.01, 0.023],
  animation: ['2', '4', '1'],
  delay: 1500,
},
{
  id: 16,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.038, 0.013, -0.013],
  animation: ['2', '4', '1'],
  delay: 900,
},
{
  id: 17,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.037, 0.007, 0.016],
  animation: ['2', '4', '1'],
  delay: 1200,
},
{
  id: 18,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.002, 0.01, 0.056],
  animation: ['2', '4', '1'],
  delay: 600,
},
{
  id: 19,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.025, 0.006, 0.06],
  animation: ['2', '4', '1'],
  delay: 100,
},
{
  id: 20,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.034, 0.007, 0.057],
  animation: ['2', '4', '1'],
  delay: 200,
},
{
  id: 21,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.04, 0.005, -0.057],
  animation: ['2', '4', '1'],
  delay: 200,
},
{
  id: 22,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.0023, 0.006, -0.062],
  animation: ['2', '4', '1'],
  delay: 270,
},
{
  id: 23,
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.046, 0.011, -0.002],
  animation: ['2', '4', '1'],
  delay: 0,
},
{
  id: 24,
  obj: 'heart',
  material: 'heart',
  scale: [0.02, 0.02, 0.02],
  position: [0, 0, 0],
  rotation: [270, 0, 90],
  animationReset: false,
  animation: ['2', '4', '1'],
  delay: 0,
},
{
  id: 25,
  obj: 'heart',
  material: 'heart',
  scale: [0.05, 0.05, 0.05],
  position: [0, 0, 0],
  rotation: [270, 0, 90],
  animationReset: false,
  animation: ['2', '4', '1'],
  delay: 0,
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
  height: 1,
  width: 1,
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
  scaleX: '0.004',
  scaleY: '0.004',
  scaleZ: '0.004',
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
];
