import Realm from 'realm';
import databaseOptions from './databaseOptions';
import { createData } from './realmController';

//git const Realm = createData();

/**
 * returns a Realm with standard database options
 */
export default new Realm(databaseOptions);
