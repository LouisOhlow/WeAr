import SCREENS from '../../navigation/navigationScreens';
import { getFiltersByNode } from '../dataController';
import Realm from '../Realm';
import { MEDIA_SCHEMA } from '../Schemas';

/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {number} index the chosen flower index
 * @returns {object} the videoobject with src, height, weight and rotation
 */
export function getVideoDataByIndex(index) {
  const realm = Realm;
  const filter = getFiltersByNode(SCREENS.flower)[index];

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

/**
 * updates the video source from the chosen filter in the realm db
 *
 * @param {number} index the chosen flower index
 * @param {colors} videoData videoData with height, width, src and rotation
 */
export function setVideoDataByIndex(index, videoData) {
  const realm = Realm;
  const filter = getFiltersByNode(SCREENS.flower)[index];

  const videoId = parseInt(filter.media[0], 10);

  realm.write(() => {
    realm.create(MEDIA_SCHEMA, {
      id: videoId,
      src: videoData.src,
      height: videoData.height,
      width: videoData.width,
      rotation: videoData.rotation,
    }, 'modified');
  });
}
