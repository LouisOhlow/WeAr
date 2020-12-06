import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './js/navigation/ScreenNavigator';
import { closeRealm, openRealm, createData, cleanAllData } from './js/data/db/realmController';
import { getFilterByNode, getAugmentsByNode, getMediaByNode, getAnimationsByAugment } from './js/data/db/FilterController';
import { View, Text } from 'react-native';
import { create } from 'react-test-renderer';

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
    closeRealm(this.state.realm);
  }

  render() {
    const index = 0;
    const node = 'flower';

    const filter = this.state.realm && getFilterByNode(this.state.realm, node, index)
    const augments = this.state.realm && getAugmentsByNode(this.state.realm, node, index)
    const media = this.state.realm && getMediaByNode(this.state.realm, node, index)
    const animations = this.state.realm && getAnimationsByAugment(this.state.realm, augments)

    const test = this.state.realm
    ? 'result: ' + animations[1][0].id : 'nothing....';

    return (
      <AppContainer />
    );
  }
}

export default App;
