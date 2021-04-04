import alert from '../../utils/alert/Alert';
import { getFiltersByNode, getMaxIdBySchema } from '../dataController';
import realmConnection from '../Realm';
import { AUGMENT_SCHEMA, FILTER_SCHEMA } from '../Schemas';

const postFilter = (filter) => {
  const node = filter.selectedNode;
  const id = getMaxIdBySchema(FILTER_SCHEMA);

  const allFilters = getFiltersByNode(node);
  const index = allFilters.sorted('index')[allFilters.length - 1].index + 1;

  const { settings } = allFilters[0];

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${randomColor}`;

  const augmentIds = createAugments(filter.selectedAugments);
  const newFilter = {
    id,
    augments: augmentIds,
    media: [],
    settings,
    reusingMaterial: true,
    node,
    color,
    index,
  };

  alert(augmentIds[0]);

  const Realm = realmConnection;
  Realm.write(() => {
    Realm.create(FILTER_SCHEMA, newFilter);
  });
};

export default postFilter;

const createAugments = (augments) => {
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
