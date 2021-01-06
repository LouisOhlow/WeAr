import SCREENS from '../../navigation/navigationScreens';
import createFlower from './flower/flowerController';
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
      return createFlower(data);
    default:
      return 0;
  }
}

/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @returns {object} the videoobject with src, height, weight and rotation
 */
export function deleteFilterByNodeIndex(realm, index) {
  const filter = realm.objects(FILTER_SCHEMA).filtered(`node = '${SCREENS.flower}' AND index = '${index}'`)[0];

  const videoId = filter.media[0];
  const mediaObject = realm.objects(MEDIA_SCHEMA).filtered(`id = '${videoId}'`)[0];

  const data = {
    src: mediaObject.src,
    height: mediaObject.height,
    width: mediaObject.width,
    rotation: mediaObject.rotation,
  };

  return data;
}
