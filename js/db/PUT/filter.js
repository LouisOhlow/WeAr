import { getFiltersByNode } from '../dataController';
import realmConnection from '../Realm';
import { AUGMENT_SCHEMA, FILTER_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

/**
 *
 */
export const updateFilter = (filter) => {
  const realm = realmConnection;
  // const curFilter = getFiltersByNode(filter.selectedNode)[filter.selectedIndex];
  const augments = [...filter.selectedAugments];

  const allMaterials = [];

  filter.selectedMaterial.forEach((materials, outerIndex) => {
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

  // realm.create(AUGMENT_SCHEMA, {
  //   id: 30,
  //   scale: [0.03, 0.03, 0.03],
  //   animationReset: false,
  //   material: ['7'],
  //   animation: ['13', '14', '15', '15', '15', '13', '14', '15', '15', '15', '15', '15', '15', '15', '13', '14'],
  //   node: 'metal_ar',
  // }, 'modified');
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
