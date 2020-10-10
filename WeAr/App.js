import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Text } from 'react-native';
import PermissionContainer from './js/components/molecules/permission/PermissionContainer';
import ArEntry from './js/ar/ArEntry';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <PermissionContainer>
        <ArEntry />
      </PermissionContainer>
    );
  }
}

export default App;