import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import COLORS from '../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
import SCREENS from '../../../navigation/navigationScreens';
import SettingsBox from '../SettingsBox';
import SettingsFooter from '../SettingsFooter';
import SettingsHeader from '../SettingsHeader';

/**
 * contains the settings for the flower filter
 */
class FlowerSettingContainer extends React.Component {
  /**
   * contains the configuration for the screen change animation
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

  /**
   * is called when the user presses the save button
   * opens the box which saves the changes
   */
  save() {
    this.props.navigation.navigate(SCREENS.browse);
  }

  /**
   * is called when the user abort the filter changes
   * opens the dialog box which asks if the user is sure
   */
  abort() {
    this.props.navigation.navigate(SCREENS.browse);
  }

  /**
   * navigate to a specific setting
   *
   * @param {string} setting the screen string to which the setting should navigate to
   */
  navigateToFilterSetting(setting) {
    this.props.navigation.navigate(setting);
  }

  render() {
    const { navigation } = this.props;
    const newFilter = navigation.state.params;

    return (
      <View>
        <SettingsHeader title="FILTER SETTINGS" navigate={() => this.abort()} buttonType="cancel" />
        <View style={styles.body}>
          <SettingsBox navigate={() => { this.navigateToFilterSetting(SCREENS.flowerColor); }} title="REPLACE AR VIDEO" image={require('../../../drawables/colored_avocado.png')} />
          <SettingsBox navigate={() => { this.navigateToFilterSetting(SCREENS.flowerColor); }} title="EDIT FLOWER COLOR" image={require('../../../drawables/colored_flowers.png')} />
        </View>
        <SettingsFooter title="SAVE" navigate={() => this.save()} styling="apply" />
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
