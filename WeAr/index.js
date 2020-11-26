import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
