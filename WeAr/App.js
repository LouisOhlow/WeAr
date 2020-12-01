import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './js/navigation/ScreenNavigator';
import { closeRealm, openRealm } from './js/data/ar_dummy/db/dataController';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentDidMount() {
    this.setState({ realm: openRealm() });
    SplashScreen.hide();
  }

  componentWillUnmount() {
    closeRealm();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
