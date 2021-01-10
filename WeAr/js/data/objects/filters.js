import SCREENS from '../../navigation/navigationScreens';

const flower = require('./flower.obj');
const heart = require('./heart.obj');

const filterObjects = [
  {
    node: SCREENS.flower,
    object: flower,
    image: require('../../drawables/flower_shirt.png'),
  },
  {
    node: SCREENS.heart,
    object: heart,
    image: require('../../drawables/heart_shirt.png'),
  },
];

export default filterObjects;
