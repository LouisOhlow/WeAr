import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './js/navigation/ScreenNavigator';

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
