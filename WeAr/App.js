import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import PermissionContainer from './js/components/molecules/permission/PermissionContainer';
import ARContainer from './js/components/molecules/ar/ARContainer';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <PermissionContainer>
        <ARContainer />
      </PermissionContainer>
    );
  }
}

export default App;