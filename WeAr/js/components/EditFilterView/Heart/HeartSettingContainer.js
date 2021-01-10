import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilterIndex } from '../../../actions/filter';
import { addFilterByNode, deleteFilterByNode } from '../../../data/db/filterDataController';
import { setFlowercolorByIndex } from '../../../data/db/flower/colorDataController';
import { setVideoDataByIndex } from '../../../data/db/flower/videoDataController';
import COLORS from '../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';
import SCREENS from '../../../navigation/navigationScreens';
import DeleteDialog from '../DeleteDialog';
import SettingsBox from '../SettingsBox';
import SettingsFooter from '../SettingsFooter';
import SettingsHeader from '../SettingsHeader';

/**
 * contains the settings for the flower filter
 */
class HeartSettingContainer extends React.Component {
  /**
   * contains the configuration for the screen change animation
   */
  static navigationOptions = NAVIGATION_OPTIONS;

  constructor() {
    super();

    this.state = {
      deleteDialog: false,
    };
  }

  /**
   * is called when the user presses the save button
   * opens the box which saves the changes
   */
  save() {
    const { heart, filter, navigation } = this.props;
    const { newFilter } = navigation.state.params;

    if (newFilter) {
      addFilterByNode(filter.selectedNode, heart);
    } else {
      setVideoDataByIndex(filter.selectedIndex, heart);
      setFlowercolorByIndex(filter.selectedIndex, heart);
    }

    this.props.navigation.goBack();
  }

  /**
   * is called when the user abort the filter changes
   * opens the dialog box which asks if the user is sure
   */
  abort() {
    const { navigation, filter } = this.props;
    const { newFilter } = navigation.state.params;

    if (!newFilter) {
      deleteFilterByNode(SCREENS.heart, filter.selectedIndex);
      const newIndex = filter.selectedIndex - 1;
      this.props.setSelectedIndex(newIndex);
    }
    navigation.goBack();
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
    const { deleteDialog } = this.state;
    const { navigation } = this.props;
    const { newFilter } = navigation.state.params;

    return (
      deleteDialog
        ? (
          <DeleteDialog
            onDelete={() => this.abort()}
            onCancel={() => this.setState({ deleteDialog: false })}
            newFilter={newFilter}
          />
        )
        : (
          <View>
            <SettingsHeader title="FILTER SETTINGS" navigate={() => this.setState({ deleteDialog: true })} buttonType="cancel" />
            <View style={styles.body}>
              <SettingsBox navigate={() => { this.navigateToFilterSetting(SCREENS.heartColor); }} title="CHANGE HEART COLOR" image={require('../../../drawables/colored_avocado.png')} />
            </View>
            <SettingsFooter title="SAVE" navigate={() => this.save()} styling="apply" />
          </View>
        )
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
  heart: state.heartRed.heart,
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: (index) => dispatch(setFilterIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeartSettingContainer);
