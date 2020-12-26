import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../../../drawables/colors';

export default class ColorPicker extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: COLORS.neutral,
    borderWidth: 3,
  },
});
