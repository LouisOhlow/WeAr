import SCREENS from '../../navigation/navigationScreens';

const { flower } = SCREENS;

export const filter = [{
  id: 'f-1',
  augments: ['o-1', 'o-2', 'o-3', 'o-4', 'o-5', 'o-6', 'o-7', 'o-8', 'o-9', 'o-10', 'o-11', 'o-12', 'o-13', 'o-14', 'o-15', 'o-16', 'o-17', 'o-18', 'o-19', 'o-20', 'o-21', 'o-22', 'o-23'],
  media: ['m-1'],
  materialList: ['flower-1-mat'],
  reusingMaterial: true,
  node: flower,
  index: 0,
},
{
  id: 'f-2',
  augments: ['o-1', 'o-2', 'o-3', 'o-4', 'o-5', 'o-6', 'o-7', 'o-8', 'o-9', 'o-10', 'o-11', 'o-12', 'o-13', 'o-14', 'o-15', 'o-16', 'o-17', 'o-18', 'o-19', 'o-20', 'o-21', 'o-22', 'o-23'],
  media: ['m-1'],
  materialList: ['flower-2-mat'],
  reusingMaterial: true,
  node: flower,
  index: 1,
},
{
  id: 'f-3',
  augments: ['o-1', 'o-2', 'o-3', 'o-4', 'o-5', 'o-6', 'o-7', 'o-8', 'o-9', 'o-10', 'o-11', 'o-12', 'o-13', 'o-14', 'o-15', 'o-16', 'o-17', 'o-18', 'o-19', 'o-20', 'o-21', 'o-22', 'o-23'],
  media: ['m-1'],
  materialList: ['flower-3-mat'],
  reusingMaterial: true,
  node: flower,
  index: 2,
},
];

export const materialList = [{
  id: 'flower-1-mat',
  material: ['mat-0', 'mat-1'],
},
{
  id: 'flower-2-mat',
  material: ['mat-2', 'mat-3'],
},
{
  id: 'flower-3-mat',
  material: ['mat-5', 'mat-4'],
},
];

export const material = [{
  id: 'mat-0',
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#590000',
},
{
  id: 'mat-1',
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#004500',
},
{
  id: 'mat-2',
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#500045',
},
{
  id: 'mat-3',
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#010950',
},
{
  id: 'mat-4',
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#C50500',
},
{
  id: 'mat-5',
  shininess: 0.1,
  lightingModel: 'Lambert',
  diffuseColor: '#558605',
},
];

export const augments = [{
  id: 'o-1',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0, 0, 0],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1700,
},
{
  id: 'o-2',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.05, 0.01, 0.03],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 200,
},
{
  id: 'o-3',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.05, 0.003, 0.05],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 0,
},
{
  id: 'o-4',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.04, 0.005, -0.04],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1500,
},
{
  id: 'o-5',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.015, -0.001, -0.045],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1400,
},
{
  id: 'o-6',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.02, 0.012, 0.04],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 350,
},
{
  id: 'o-7',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.02, 0.019, 0.005],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1350,
},
{
  id: 'o-8',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.02, 0.012, -0.045],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1250,
},
{
  id: 'o-9',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.043, 0.007, -0.027],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 750,
},
{
  id: 'o-10',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.02, 0.009, 0.03],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 700,
},
{
  id: 'o-11',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.02, 0.01, -0.02],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 850,
},
{
  id: 'o-12',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.037, 0.012, -0.065],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 500,
},
{
  id: 'o-13',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.01, 0.005, -0.025],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 50,
},
{
  id: 'o-14',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.024, 0.008, 0.0012],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1100,
},
{
  id: 'o-15',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.002, 0.01, 0.023],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1500,
},
{
  id: 'o-16',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.038, 0.013, -0.013],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 900,
},
{
  id: 'o-17',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.037, 0.007, 0.016],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 1200,
},
{
  id: 'o-18',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.002, 0.01, 0.056],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 600,
},
{
  id: 'o-19',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [-0.025, 0.006, 0.06],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 100,
},
{
  id: 'o-20',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.034, 0.007, 0.057],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 200,
},
{
  id: 'o-21',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.04, 0.005, -0.057],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 200,
},
{
  id: 'o-22',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.0023, 0.006, -0.062],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 270,
},
{
  id: 'o-23',
  obj: 'flower',
  material: 'flower',
  scale: [0, 0, 0],
  position: [0.046, 0.011, -0.002],
  animation: ['a-2', 'a-4', 'a-1'],
  delay: 0,
},
];

export const mediaPlane = [{
  id: 'm-1',
  media: 'avocado',
  type: 'mov',
  loop: true,
  opacity: '0',
  video: false,
  delay: 4000,
  run: true,
  height: 0.1,
  width: 0.1,
  position: [0, 0, 0],
  scale: [1, 1, 1],
  animation: ['a-5', 'a-6'],
},
];

export const animation = [{
  id: 'a-1',
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
  id: 'a-2',
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
  id: 'a-4',
  easing: 'Linear',
  duration: 5000,
  rotateY: '500',
  index: 0,
},
{
  id: 'a-5',
  opacity: '1.0',
  easing: 'EaseIn',
  duration: 2000,
  index: 0,
},
{
  id: 'a-6',
  opacity: '1',
  easing: 'Easing',
  duration: 6600,
  index: 0,
},
];
