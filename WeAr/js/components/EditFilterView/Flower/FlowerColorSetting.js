import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
import SCREENS from '../../../navigation/navigationScreens';
import SettingsFooter from '../SettingsFooter';
import SettingsHeader from '../SettingsHeader';
import ColorSelector from './ColorSelector';

export default class FlowerColorSetting extends React.Component {
  /**
   * contains the options for navigating the screens
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

  /**
   * going back to the last screen
   */
  back() {
    this.props.navigation.navigate(SCREENS.flower);
  }

  render() {
    return (
      <View style={styles.container}>
        <SettingsHeader title="EDIT FLOWER COLORS" navigate={() => this.back()} buttonType="back" />
        <ColorSelector />
        <SettingsFooter title="SAVE" navigate={() => this.save()} styling="apply" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.background,
  },
});
