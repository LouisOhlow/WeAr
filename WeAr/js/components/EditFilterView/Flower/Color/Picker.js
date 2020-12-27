import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import AppButton from '../../../basics/AppButton';

function Picker(props) {
  return (
    <View style={styles.container}>
      <View>
        <ColorPicker
          style={styles.picker}
          onColorSelected={(color) => alert(`Color selected: ${color}`)}
        />
        <View style={styles.buttons}>
          <AppButton onPress={() => { props.closePicker(); }} title="CANCEL" styling="cancel" />
          <AppButton onPress={() => { props.closePicker(); }} title="APPLY" styling="apply" />
        </View>
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
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
  },
  picker: {
    height: 150,
    width: 150,
  },
});
