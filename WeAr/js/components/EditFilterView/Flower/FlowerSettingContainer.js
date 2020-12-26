import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import COLORS from '../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
import SettingsBox from '../SettingsBox';
import SettingsFooter from '../SettingsFooter';
import SettingsHeader from '../SettingsHeader';

// import SettingNavigationButton from '../../navigation/SettingNavigationButton';

class FlowerSettingContainer extends React.Component {
  /**
   * contains the configuration for the screen change animation
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

  save = () => {
    this.props.navigation.navigate('Browse');
  }

  abort = () => {
    this.props.navigation.navigate('Browse');
  }

  navigateToFilterSetting = (setting) => {

  }

  render() {
    const { navigation } = this.props;
    const newFilter = navigation.state.params;

    return (
      <View>
        <SettingsHeader navigate={() => this.abort()} />
        <View style={styles.body}>
          <SettingsBox navigate={() => {}} title="REPLACE AR VIDEO" image={require('../../../drawables/colored_avocado.png')}/>
          <SettingsBox navigate={() => {}} title="EDIT FLOWER COLOR" image={require('../../../drawables/colored_flowers.png')}/>
        </View>
        <SettingsFooter navigate={() => this.save()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '60%',
    width: '100%',
    backgroundColor: COLORS.background,
  },
  setting: {
    width: '80%',
    height: '40%',
    margin: 27,
  },
  box: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 40,
  },
  text: {
    backgroundColor: 'red',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
  },
});

export default FlowerSettingContainer;
