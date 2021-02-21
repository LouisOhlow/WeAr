import SCREENS from '../navigation/navigationScreens';
import { IMAGES, TARGETS } from './drawables';

const flower = require('./objects/flower.obj');
const heart = require('./objects/heart.obj');

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
];

export default filterObjects;
