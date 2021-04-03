import { getFiltersByNode, getMaxIdBySchema } from '../dataController';
import realmConnection from '../Realm';
import { FILTER_SCHEMA } from '../Schemas';

const postFilter = (filter) => {
  const node = 'metal';
  const id = getMaxIdBySchema(FILTER_SCHEMA);

  const allFilters = getFiltersByNode(node);
  const index = allFilters.sorted('index')[allFilters.length - 1].index + 1;

  const newFilter = {
    id,
    augments: ['26', '27', '28', '29', '30'],
    media: [],
    settings: ['3', '10', '13', '4', '11', '14', '5', '12', '15', '16', '17'],
    reusingMaterial: true,
    node,
    color: '#AB297F',
    index,
  };

  const Realm = realmConnection;
  Realm.write(() => {
    Realm.create(FILTER_SCHEMA, newFilter);
  });
};

export default postFilter;
