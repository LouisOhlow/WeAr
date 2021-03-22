import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Picker from '../Picker';
import COLORS from '../../../res/colors';

/**
 * displays the color picker and two buttons
 * button 1 'apply' calls closePicker with true
 * button 2 'cancel' calls closePicker with false
 *
 * @param {string} startColor prop to set the default color to be shown
 */
class ColorSetting extends React.Component {
  constructor() {
    super();
    this.state = {
      showPicker: false,
    };
  }

  closePicker = (save) => {
    this.setState({ showPicker: false });
  }

  render() {
    const { showPicker } = this.state;

    return (
      <View style={styles.colorContainer}>
        {showPicker
          ? <View style={styles.pickerContainer}><Picker closePicker={this.closePicker} /></View>
          : (
            <TouchableOpacity
              style={styles.colorbox}
              onPress={() => { this.setState({ showPicker: true }); }}
            />
          )}
      </View>
    );
  }
}

export default ColorSetting;

const styles = StyleSheet.create({
  colorContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    alignSelf: 'baseline',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorbox: {
    width: 70,
    height: 70,
    margin: 15,
    borderWidth: 3,
    borderColor: COLORS.neutral,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  pickerContainer: {
    position: 'absolute',
    top: -300,
    height: '500%',
    width: '100%',
  },
});
