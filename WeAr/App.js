import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Text } from 'react-native';
import PermissionContainer from './js/components/molecules/permission/PermissionContainer';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <PermissionContainer>
        <Text> CAMERA VIEW </Text>
      </PermissionContainer>
    );
  }
}

export default App;