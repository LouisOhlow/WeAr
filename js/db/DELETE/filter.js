import { getAugmentsByNode, getSelectedFilter } from '../dataController';
import realmConnection from '../Realm';
import { AUGMENT_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

function deleteFilter(node, index) {
  const realm = realmConnection;

  const filter = getSelectedFilter(node, index);
  const augments = getAugmentsByNode(node, index);
  const materials = augments.map((augment) => augment.material);
  const uniqueMaterials = [...new Set(materials)];

  uniqueMaterials.forEach((id) => {
    const material = realm.objects(MATERIAL_SCHEMA).filtered(`id = '${id}'`)[0];
    realm.write(() => {
      realm.delete(material);
    });
  });
  augments.forEach((augment) => {
    const realmAugment = realm.objects(AUGMENT_SCHEMA).filtered(`id = '${augment.id}'`)[0];
    realm.write(() => {
      realm.delete(realmAugment);
    });
  });
  realm.write(() => {
    realm.delete(filter);
  });
}

export default deleteFilter;
