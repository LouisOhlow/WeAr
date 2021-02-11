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
import SCREENS from '../../../navigation/navigationScreens';
import DeleteDialog from '../DeleteDialog';
import SettingsBox from '../SettingsBox';
import SettingsFooter from '../SettingsFooter';
import SettingsHeader from '../SettingsHeader';

/**
 * contains the settings for the flower filter
 */
class FlowerSettingContainer extends React.Component {
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
    const { flower, filter, navigation } = this.props;
    const { newFilter } = navigation.state.params;

    if (newFilter) {
      addFilterByNode(filter.selectedNode, flower);
    } else {
      setVideoDataByIndex(filter.selectedIndex, flower);
      setFlowercolorByIndex(filter.selectedIndex, flower);
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
      deleteFilterByNode(SCREENS.flower, filter.selectedIndex);
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

    const buttonText = newFilter ? 'CREATE' : 'SAVE';

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
            <SettingsHeader
              title="FILTER SETTINGS"
              goBack={() => this.abort()}
              onPress={() => this.setState({ deleteDialog: true })}
              buttonType={newFilter ? 'none' : 'delete'}
            />
            <View style={styles.body}>
              <SettingsBox navigate={() => { this.navigateToFilterSetting(SCREENS.flowerVideo); }} title="REPLACE AR VIDEO" image={require('../../../drawables/colored_avocado.png')} />
              <SettingsBox navigate={() => { this.navigateToFilterSetting(SCREENS.flowerColor); }} title="EDIT FLOWER COLOR" image={require('../../../drawables/colored_flowers.png')} />
            </View>
            <SettingsFooter title={buttonText} navigate={() => this.save()} styling="apply" />
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
  flower: state.flowerRed.flower,
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: (index) => dispatch(setFilterIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowerSettingContainer);
