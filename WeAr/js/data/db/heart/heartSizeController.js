import SCREENS from '../../../navigation/navigationScreens';
import { getFiltersByNode } from '../dataController';
import Realm from '../Realm';
import {
  AUGMENT_SCHEMA,
} from '../Schemas';

/**
 * fetches the heart size from the chosen filter
 *
 * @param {number} index the chosen heart index
 * @returns {number} the heart size
 */
export function getHeartSizeByIndex(index) {
  const realm = Realm;
  const filter = getFiltersByNode(SCREENS.heart)[index];

  const augmentId = filter.augment[0];
  const augmentObject = realm.objects(AUGMENT_SCHEMA).filtered(`id = '${augmentId}'`)[0];

  return augmentObject.scale[0];
}

/**
 * updates the heart size from the chosen filter
 *
 * @param {number} index the Heart's index
 * @param {number} size the heart scaling
 */
export function setHeartSizeByIndex(index, size) {
  const realm = Realm;
  const filter = getFiltersByNode(SCREENS.heart)[index];

  const augmentId = parseInt(filter.augments[0], 10);

  realm.write(() => {
    realm.create(AUGMENT_SCHEMA, {
      id: augmentId,
      scale: [size, size, size],
    }, 'modified');
  });
}
