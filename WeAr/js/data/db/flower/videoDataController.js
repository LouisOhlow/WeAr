import SCREENS from '../../../navigation/navigationScreens';
import {
  FILTER_SCHEMA, MEDIA_SCHEMA,
} from '../Schemas';

/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @returns {object} the video uri
 */
export function getVideoDataByIndex(realm, index) {
  const filter = realm.objects(FILTER_SCHEMA).filtered(`node = '${SCREENS.flower}' AND index = '${index}'`)[0];

  const videoId = filter.media[0];
  const mediaObject = realm.objects(MEDIA_SCHEMA).filtered(`id = '${videoId}'`)[0];

  const data = {
    src: mediaObject.src,
    height: mediaObject.height,
    width: mediaObject.width,
  };

  return data;
}

/**
 * updates the video source from the chosen filter in the realm db
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @param {colors} uri uri from the video
 */
export function setVideoDataByIndex(realm, index, videoData) {
  const filter = realm.objects(FILTER_SCHEMA).filtered(`node = '${SCREENS.flower}' AND index = '${index}'`)[0];

  const videoId = filter.media[0];

  realm.write(() => {
    realm.create(MEDIA_SCHEMA, {
      id: videoId,
      src: videoData.src,
      height: videoData.height,
      width: videoData.width,
    }, 'modified');
  });
}
