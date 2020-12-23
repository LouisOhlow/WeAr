import React from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { openRealm, closeRealm, createData } from './js/data/db/realmController';
import AppContainer from './js/navigation/ScreenNavigator';
import { getCurrentAugments, getCurrentMedia, setupCurrentAnimation } from './js/utils/ar/setupARScene';
import { setSelectedObjects } from './js/actions/filter';

class App extends React.Component {

  /**
   * Hiding the SplashScreen
   */
  componentDidMount() {
    this.initiateARdata();
    SplashScreen.hide();
  }

  initiateARdata = () => {
    // const index = this.props.filter.selectedIndex;
    // const node = this.props.filter.selectedNode;

    // const realm = createData();

    // const augments = getCurrentAugments(realm, node, index);
    // const media = getCurrentMedia(realm, node, index);

    // setSelectedObjects(augments, media)
    // setupCurrentAnimation(realm, augments, media);
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

const mapDispatchToProps = (dispatch) => ({
  setSelectedObjects: (augments, media) => dispatch(setSelectedObjects(augments, media)),
});

const mapStateToProps = (state) => {
  return{
    filter: state.filterRed.filter,
    animation: state.animationRed.animation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
