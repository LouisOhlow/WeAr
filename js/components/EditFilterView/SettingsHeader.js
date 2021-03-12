import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../res/colors';

function SettingsHeader(props) {
  const {
    style,
  } = props;

  return (
    <View style={style} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: COLORS.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});

export default SettingsHeader;

SettingsHeader.defaultProps = {
  style: styles.container,
};
