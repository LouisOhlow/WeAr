import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import PermissionContainer from './js/components/molecules/permission/PermissionContainer';
import ARContainer from './js/components/molecules/ar/ARContainer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppContainer from './js/screens/CameraScreen';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
