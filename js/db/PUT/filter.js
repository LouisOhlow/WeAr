import realmConnection from '../Realm';
import { AUGMENT_SCHEMA, FILTER_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

/**
 *
 */
export const updateFilter = (filter) => {
  const realm = realmConnection;
  // const curFilter = getFiltersByNode(filter.selectedNode)[filter.selectedIndex];
  const augments = JSON.parse(JSON.stringify(filter.selectedAugments));
  const mat = JSON.parse(JSON.stringify(filter.selectedMaterial));
  const allMaterials = [];

  mat.forEach((materials, outerIndex) => {
    materials.forEach((material, innerIndex) => {
      const id = augments[outerIndex].material[innerIndex];
      material.id = parseInt(id, 10);
      allMaterials.push(material);
    });
  });

  const uniqueMaterials = [...new Set(allMaterials)];

  augments.forEach((augment) => {
    realm.write(() => {
      realm.create(AUGMENT_SCHEMA, augment, 'modified');
    });
  });

  uniqueMaterials.forEach((material) => {
    realm.write(() => {
      realm.create(MATERIAL_SCHEMA, material, 'modified');
    });
  });
};

export const updateFilterColorById = (id, color) => {
  const realm = realmConnection;

  realm.write(() => {
    realm.create(FILTER_SCHEMA, {
      id,
      color,
    }, 'modified');
  });
};
