import SCREENS from '../navigation/navigationScreens';
import { IMAGES, TARGETS } from './drawables';

const flower = require('./objects/flower.obj');
const heart = require('./objects/heart.obj');
const metal = require('./objects/metal.obj');

const filterObjects = [
  {
    node: SCREENS.flower,
    object: flower,
    image: IMAGES.flowerShirt,
    target: TARGETS.flowerTarget,
  },
  {
    node: SCREENS.heart,
    object: heart,
    image: IMAGES.heartShirt,
    target: TARGETS.heartTarget,
  },
  {
    node: SCREENS.metal,
    object: metal,
    image: IMAGES.metalShirt,
    target: TARGETS.metalTarget,
  },
];

export default filterObjects;
