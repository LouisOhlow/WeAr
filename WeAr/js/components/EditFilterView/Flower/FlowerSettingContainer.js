import React from 'react';
import {
  View, Image, Button, StyleSheet,
} from 'react-native';
import COLORS from '../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
import SettingsFooter from '../SettingsFooter';
import SettingsHeader from '../SettingsHeader';

// import SettingNavigationButton from '../../navigation/SettingNavigationButton';

class FlowerSettingContainer extends React.Component {
  /**
   * contains the configuration for the screen change animation
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

  navigateToBrowseFilterContainer = () => {
    this.props.navigation.navigate('Browse');
  }

  navigateToFilterSetting = (setting) => {

  }

  render() {
    const { navigation } = this.props;
    const newFilter = navigation.state.params;

    return (
      <View>
        <View>
          <SettingsHeader navigate={() => this.navigateToBrowseFilterContainer()} />
          <View style={styles.body} />
          <SettingsFooter navigate={() => this.navigateToBrowseFilterContainer()} />
        </View>
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
});

export default FlowerSettingContainer;
