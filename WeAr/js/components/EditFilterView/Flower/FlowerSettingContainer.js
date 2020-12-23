import React from 'react';
import {
  View, Image, Button, StyleSheet,
} from 'react-native';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
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
      <View style={styles.container}>
        <View>
          <SettingsHeader navigate={() => this.navigateToBrowseFilterContainer()} />
          <View style={styles.body} />
          <View style={styles.footer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  body: {
    height: '50%',
    width: '100%',
    backgroundColor: 'green',
  },
  footer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'blue',
  },
});

export default FlowerSettingContainer;
