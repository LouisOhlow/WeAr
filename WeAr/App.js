import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './js/navigation/ScreenNavigator';

class App extends React.Component {

  /**
   * Hiding the SplashScreen
   */
  componentDidMount() {
    SplashScreen.hide();
  }

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
