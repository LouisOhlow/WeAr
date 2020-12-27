import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../../../drawables/colors';

export default class ColorPreview extends React.Component {
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    backgroundColor: COLORS.action,
  },
});
