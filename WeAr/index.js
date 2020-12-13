import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './js/state-management/store';

const store =  configureStore();

const Root = () => 
<Provider store={store} >
    <App />
</Provider>

AppRegistry.registerComponent(appName, () => Root);

