import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './js/navigation/ScreenNavigator';

class App extends React.Component {
  /**
   * rendering the AppContainer
   */
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
