import getRandomColor from '../../utils/style/randomColor';
import { getFiltersByNode, getMaxIdBySchema } from '../dataController';
import realmConnection from '../Realm';
import { AUGMENT_SCHEMA, FILTER_SCHEMA, MATERIAL_SCHEMA } from '../Schemas';

const postFilter = (filter) => {
  const node = filter.selectedNode;
  const allFilters = getFiltersByNode(node);

  const materialIDs = postMaterials(filter.selectedMaterial);
  const augmentCopy = JSON.parse(JSON.stringify(filter.selectedAugments));

  const augmentsWMat = augmentCopy.map((augment, index) => {
    augment.material = materialIDs[index];
    return augment;
  });

  const id = getMaxIdBySchema(FILTER_SCHEMA);
  const augments = postAugments(augmentsWMat);

  const media = [];
  const { settings } = allFilters[0];
  const reusingMaterial = true;
  const color = getRandomColor();
  const index = allFilters.sorted('index')[allFilters.length - 1].index + 1;

  const newFilter = {
    id,
    augments,
    media,
    settings,
    reusingMaterial,
    node,
    color,
    index,
  };

  const Realm = realmConnection;
  Realm.write(() => {
    Realm.create(FILTER_SCHEMA, newFilter);
  });

  return index;
};

export default postFilter;

const postAugments = (augments) => {
  const maxID = getMaxIdBySchema(AUGMENT_SCHEMA);
  const oldAugments = JSON.parse(JSON.stringify(augments));

  const augmentIDs = [];
  const Realm = realmConnection;

  oldAugments.forEach((augment, i) => {
    const index = maxID + i;
    augmentIDs.push(`${index}`);
    augment.id = index;
    Realm.write(() => {
      Realm.create(AUGMENT_SCHEMA, augment);
    });
  });
  return augmentIDs;
};

const postMaterials = (mat) => {
  const materialIds = [];

  const matList = JSON.parse(JSON.stringify(mat));
  const maxId = getMaxIdBySchema(MATERIAL_SCHEMA);
  const Realm = realmConnection;

  matList.forEach((materials, outerIndex) => {
    const innerMatList = [];
    materials.forEach((material, innerIndex) => {
      const id = maxId + innerIndex + outerIndex;
      innerMatList.push(`${id}`);
      material.id = id;
      material.diffuseColor = getRandomColor();
      Realm.write(() => {
        Realm.create(MATERIAL_SCHEMA, material);
      });
    });
    materialIds.push(innerMatList);
  });

  return materialIds;
};
