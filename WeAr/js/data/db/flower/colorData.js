import { FILTER_SCHEMA, MATERIAL_LIST_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

export function getFlowercolorByIndex(realm, index) {
  const filter = realm.objects(FILTER_SCHEMA).filtered(`node = 'flower' AND index = '${index}'`)[0];

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

export function setFlowercolorByIndex(realm, index, colors) {
  const filter = realm.objects(FILTER_SCHEMA).filtered(`node = 'flower' AND index = '${index}'`)[0];

  const materialListId = filter.materialList[0];
  const materialListObject = realm.objects(MATERIAL_LIST_SCHEMA).filtered(`id = '${materialListId}'`)[0];

  realm.create(MATERIAL_SCHEMA, { id: materialListObject.material[0], diffuseColor: colors.primaryColor }, 'modified');
  realm.create(MATERIAL_SCHEMA, { id: materialListObject.material[1], diffuseColor: colors.secondaryColor }, 'modified');

  return colors;
}
