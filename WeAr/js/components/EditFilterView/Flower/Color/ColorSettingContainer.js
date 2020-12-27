import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { fromHsv } from 'react-native-color-picker';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import SCREENS from '../../../../navigation/navigationScreens';
import SettingsFooter from '../../SettingsFooter';
import SettingsHeader from '../../SettingsHeader';
import Picker from './Picker';

export default class ColorSettingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSelecting: false,
      primaryColor: 'green',
      secondaryColor: 'red',
      editedColor: 'secondaryColor',
    };
  }

  setColor(color) {
    const colorRgb = fromHsv(color);
    const { editedColor } = this.state;

    this.setState({
      [editedColor]: colorRgb,
    });
  }

  getboxStyle(colorType) {
    const box = {
      backgroundColor: this.state[colorType],
      borderColor: COLORS.neutral,
      borderWidth: 3,
      height: 100,
      width: 100,
      borderRadius: 50,
    };
    return box;
  }

  openPicker(colorType) {
    this.setState({
      isSelecting: true,
      editedColor: colorType,
    });
  }

  closePicker(save) {
    if (save) {

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

    /**
   * going back to the last screen
   */
  save() {
    this.props.navigation.navigate(SCREENS.flower);
  }

  render() {
    const { isSelecting } = this.state;

    return (
      <View style={styles.container}>
        <SettingsHeader title="EDIT FLOWER COLORS" navigate={() => this.back()} buttonType="back" />
        <View style={styles.colorBoxContainer}>
          <View style={styles.colors}>
            <TouchableOpacity style={this.getboxStyle('primaryColor')} onPress={() => this.openPicker('primaryColor')} />
            <TouchableOpacity style={this.getboxStyle('secondaryColor')} onPress={() => this.openPicker('secondaryColor')} />
          </View>
        </View>
        <SettingsFooter title="SAVE" navigate={() => this.save()} styling="apply" />
        { isSelecting && (
        <View style={styles.pickerContainer}>
          <Picker
            setColor={(color) => this.setColor(color)}
            style={styles.picker}
            closePicker={(save) => this.closePicker(save)}
          />
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
  colorBoxContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  colors: {
    height: '30%',
    width: '80%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: COLORS.action,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
