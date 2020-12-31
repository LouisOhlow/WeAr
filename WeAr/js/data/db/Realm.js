import Realm from 'realm';
import databaseOptions from './databaseOptions';

/**
 * returns a Realm with standard database options
 */
export default new Realm(databaseOptions);
