import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextStyles from './TextStyle';

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
