import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import SCREENS from '../../../../navigation/navigationScreens';
import SettingsFooter from '../../SettingsFooter';
import SettingsHeader from '../../SettingsHeader';
import ColorSelectionBoxes from './ColorSelectionBoxes';
import Picker from './Picker';

export default class ColorSettingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSelecting: true,
    };
  }

  openPicker(target) {
    this.setState({
      isSelecting: true,
    });
  }

  closePicker(save) {
    if(save){

    }
    this.setState({
      isSelecting: false,
    });
  }

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
    const { isSelecting } = this.state;

    return (
      <View style={styles.container}>
        <SettingsHeader title="EDIT FLOWER COLORS" navigate={() => this.back()} buttonType="back" />
        <ColorSelectionBoxes openPicker={() => this.openPicker()} />
        <SettingsFooter title="SAVE" navigate={() => this.save()} styling="apply" />
        { isSelecting && (
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker} closePicker={() => this.closePicker(false)} />
        </View>
        )}
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
  pickerContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.alertblack,
    position: 'absolute',
    justifyContent: 'center',
  },
});
