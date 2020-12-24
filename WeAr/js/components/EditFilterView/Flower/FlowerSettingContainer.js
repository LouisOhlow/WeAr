import React from 'react';
import {
  View, Image, Button, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import COLORS from '../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
import Headline1 from '../../basics/Headline1';
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
        <SettingsHeader navigate={() => this.navigateToBrowseFilterContainer()} />
        <View style={styles.body}>
          <View style={styles.setting}>
            <TouchableOpacity onPress={() => {}} style={styles.box}>
              <Image
                style={styles.image}
                source={require('../../../drawables/img_node4.jpg')}
              />
              <Headline1 text="REPLACE AR VIDEO" style={styles.text} />
            </TouchableOpacity>
          </View>
          <View style={styles.setting}>
            <TouchableOpacity onPress={() => {}} style={styles.box}>
              <Headline1 text="EDIT FLOWER COLOR" />
            </TouchableOpacity>
          </View>
        </View>
        <SettingsFooter navigate={() => this.navigateToBrowseFilterContainer()} />
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
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default FlowerSettingContainer;
