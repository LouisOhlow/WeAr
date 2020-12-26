import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import ColorPicker from './ColorPicker';
import FlowerPreview from './FlowerPreview';

export default class ColorSelector extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.picker} >
          <ColorPicker />
          <ColorPicker />
        </View>
        <View>
          <FlowerPreview />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  picker: {
    height: '30%',
    width: '80%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
});
