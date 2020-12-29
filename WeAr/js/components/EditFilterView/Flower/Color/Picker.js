import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import COLORS from '../../../../drawables/colors';
import AppButton from '../../../basics/AppButton';

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
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picker: {
    height: 200,
    width: 200,
    margin: 15,
    borderWidth: 3,
    borderColor: COLORS.neutral,
    borderRadius: 10,
  },
});
