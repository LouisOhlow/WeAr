import SCREENS from '../navigation/navigationScreens';
import { createFlower, deleteFlower } from './flower/flowerController';
import { createHeart, deleteHeart } from './heart/heartController';
/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @returns {object} the videoobject with src, height, weight and rotation
 */
export function addFilterByNode(node, data) {
  switch (node) {
    case SCREENS.flower:
      createFlower(data);
      break;
    case SCREENS.heart:
      createHeart(data);
      break;
    default:
  }
}

/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @returns {object} the videoobject with src, height, weight and rotation
 */
export function deleteFilterByNode(node, index) {
  switch (node) {
    case SCREENS.flower:
      deleteFlower(index);
      break;
    case SCREENS.heart:
      deleteHeart(index);
      break;
    default:
  }
}
