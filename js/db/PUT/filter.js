import { getFiltersByNode } from '../dataController';
import realmConnection from '../Realm';
import { FILTER_SCHEMA } from '../Schemas';

/**
 *
 */
export const updateFilterColorByNodeAndIndex = (node, index, color) => {
  const realm = realmConnection;
  const filter = getFiltersByNode(node)[index];

  realm.write(() => {
    realm.create(FILTER_SCHEMA, {
      id: filter.id,
      color,
    }, 'modified');
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
