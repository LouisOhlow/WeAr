import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextStyles from './TextStyle';

/**
 * a simple button which calls a function when called
 *
 * @param {function} onPress is called when the button is pressed
 * @param {string} title the text to be shown on the button
 */
export default function AppButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={TextStyles.basicText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'grey',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
});
