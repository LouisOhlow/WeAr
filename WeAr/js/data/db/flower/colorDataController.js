import { Alert } from 'react-native';
import SCREENS from '../../../navigation/navigationScreens';
import { getFiltersByNode } from '../dataController';
import { FILTER_SCHEMA, MATERIAL_LIST_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

/**
 * fetches the primary and secondary color from the chosen filter
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @returns {object} a color object including the fields primaryColor and secondaryColor
 */
export function getFlowercolorByIndex(realm, index) {
  const filter = getFiltersByNode(realm, SCREENS.flower)[index];

  const materialListId = filter.materialList[0];
  const materialListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${materialListId}'`)[0];

  const primMaterialObject = realm.objects(MATERIAL_SCHEMA).filtered(`id = '${materialListObject.material[0]}'`)[0];
  const secMaterialObject = realm.objects(MATERIAL_SCHEMA).filtered(`id = '${materialListObject.material[1]}'`)[0];

  const colors = {
    primaryColor: primMaterialObject.diffuseColor,
    secondaryColor: secMaterialObject.diffuseColor,
  };

  return colors;
}

/**
 * updates the primary and secondary color from the chosen filter in the realm db
 *
 * @param {object} realm an opened realm connection
 * @param {number} index the chosen flower index
 * @param {colors} colors color object including the fields primaryColor and secondaryColor
 */
export function setFlowercolorByIndex(realm, index, colors) {
  const filter = getFiltersByNode(realm, SCREENS.flower)[index];

  const materialListId = filter.materialList[0];
  const materialListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${materialListId}'`)[0];

  realm.write(() => {
    realm.create(MATERIAL_SCHEMA, { id: materialListObject.material[0], diffuseColor: colors.primaryColor }, 'modified');
    realm.create(MATERIAL_SCHEMA, { id: materialListObject.material[1], diffuseColor: colors.secondaryColor }, 'modified');
  });

  return colors;
}
