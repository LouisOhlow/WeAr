import React from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { setFlowerVideo } from '../../../actions/flower';
import { addFilterByNode } from '../../../data/db/filterDataController';
import { setFlowercolorByIndex } from '../../../data/db/flower/colorDataController';
import { setVideoDataByIndex } from '../../../data/db/flower/videoDataController';
import Realm from '../../../data/db/Realm';
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
  static navigationOptions = NAVIGATION_OPTIONS;

  componentDidMount() {
    const { flower, filter } = this.props;
    const { navigation } = this.props;
    const { newFilter } = navigation.state.params;
    if (newFilter) {
      addFilterByNode(filter.selectedNode, flower);
    }
  }

  /**
   * is called when the user presses the save button
   * opens the box which saves the changes
   */
  save() {
    const { flower, filter } = this.props;

    setVideoDataByIndex(Realm, filter.selectedIndex, flower);
    setFlowercolorByIndex(Realm, filter.selectedIndex, flower);
    this.props.navigation.goBack();
  }

  /**
   * is called when the user abort the filter changes
   * opens the dialog box which asks if the user is sure
   */
  abort() {
    this.props.navigation.goBack();
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
    return (
      <View>
        <SettingsHeader title="FILTER SETTINGS" navigate={() => this.abort()} buttonType="cancel" />
        <View style={styles.body}>
          <SettingsBox navigate={() => { this.navigateToFilterSetting(SCREENS.flowerVideo); }} title="REPLACE AR VIDEO" image={require('../../../drawables/colored_avocado.png')} />
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
    justifyContent: 'space-around',
  },
});

const mapStateToProps = (state) => ({
  flower: state.flowerRed.flower,
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps)(FlowerSettingContainer);
