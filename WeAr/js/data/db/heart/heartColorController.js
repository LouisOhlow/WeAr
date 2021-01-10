import SCREENS from '../../../navigation/navigationScreens';
import { getFiltersByNode } from '../dataController';
import Realm from '../Realm';
import { MATERIAL_LIST_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @returns {object} a color object including the fields primaryColor and secondaryColor
 */
export function getHeartcolorByIndex(index) {
  const realm = Realm;

  const filter = getFiltersByNode(SCREENS.heart)[index];
  const materialListId = filter.materialList[0];
  const materialListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${materialListId}'`)[0];

  const matObject = realm.objects(MATERIAL_SCHEMA).filtered(`id = '${materialListObject.material[0]}'`)[0];

  const colors = {
    color: matObject.diffuseColor,
  };

  return colors;
}

/**
 * updates the primary and secondary color from the chosen filter in the realm db
 *
 * @param {number} index the chosen heart index
 * @param {string} colors color in '#RRGGBB' format
 */
export function setHeartcolorByIndex(index, color) {
  const realm = Realm;
  const filter = getFiltersByNode(SCREENS.heart)[index];

  const materialListId = filter.materialList[0];
  const materialListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${materialListId}'`)[0];

  realm.write(() => {
    realm.create(MATERIAL_SCHEMA, { id: materialListObject.material[0], diffuseColor: color }, 'modified');
  });

  return color;
}
