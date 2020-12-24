import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../drawables/colors';
import TextStyles from './TextStyle';

/**
 * a simple button which calls a function when called
 *
 * @param {function} onPress is called when the button is pressed
 * @param {string} title the text to be shown on the button
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
    backgroundColor: COLORS.background,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  apply: {
    elevation: 8,
    backgroundColor: COLORS.confirm,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cancel: {
    elevation: 8,
    borderColor: COLORS.neutral,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  discard: {
    elevation: 8,
    borderColor: COLORS.warning,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
