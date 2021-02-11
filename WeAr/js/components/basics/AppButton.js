import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../drawables/colors';
import TextStyles from './TextStyle';

/**
 * a simple button which calls a function when called
 *
 * @param {function} onPress is called when the button is pressed
 * @param {string} title the text to be shown on the button
 * @param {string} style basic, apply, cancel or discard as style definition
 */
export default function AppButton({ onPress, title, styling }) {
  return (
    <TouchableOpacity onPress={onPress} style={getStyle(styling)}>
      <Text style={TextStyles.basic}>{title}</Text>
    </TouchableOpacity>
  );
}

function getStyle(style) {
  switch (style) {
    case 'basic':
      return styles.basic;
    case 'apply':
      return styles.apply;
    case 'cancel':
      return styles.cancel;
    case 'discard':
      return styles.discard;
    default:
      return styles.basic;
  }
}

const styles = StyleSheet.create({
  basic: {
    elevation: 8,
    backgroundColor: COLORS.neutral,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 45,
    width: 150,
    justifyContent: 'center',
  },
  apply: {
    elevation: 8,
    backgroundColor: COLORS.confirm,
    borderColor: COLORS.confirm,
    borderWidth: 3,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 45,
    width: 150,
    justifyContent: 'center',
  },
  cancel: {
    elevation: 8,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 45,
    width: 150,
    justifyContent: 'center',
  },
  discard: {
    elevation: 8,
    borderColor: COLORS.warning,
    borderWidth: 3,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 45,
    width: 150,
    justifyContent: 'center',
  },
});
