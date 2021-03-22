import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import COLORS from '../../res/colors';
import AppButton from '../basics/AppButton';

/**
 * displays the color picker and two buttons
 * button 1 'apply' calls closePicker with true
 * button 2 'cancel' calls closePicker with false
 *
 * @param {string} startColor prop to set the default color to be shown
 */
function Picker(props) {
  const { startColor } = props;
  return (
    <View style={styles.container}>
      <ColorPicker
        defaultColor={startColor}
        style={styles.picker}
        onColorChange={(color) => props.setColor(color)}
      />
      <View style={styles.button}>
        <AppButton onPress={() => { props.closePicker(false); }} title="CANCEL" styling="cancel" />
        <AppButton onPress={() => { props.closePicker(true); }} title="APPLY" styling="apply" />
      </View>
    </View>
  );
}

export default Picker;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  button: {
    alignSelf: 'baseline',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picker: {
    height: '80%',
    width: '90%',
    margin: 15,
    borderWidth: 3,
    backgroundColor: COLORS.alertblack,
    borderColor: COLORS.neutral,
    borderRadius: 10,
  },
});
