import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import COLORS from '../../res/colors';
import AppButton from '../basics/AppButton';
import Headline3 from '../basics/Headline3';

function SettingNavigation(props) {
  const { label } = props;

  return (
    <View style={styles.menu}>
      <View style={styles.buttonLeft} />
      <View style={styles.label}>
        <Headline3 text={label} />
      </View>
      <View style={styles.buttonRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: '20%',
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  buttonLeft: {
    width: '15%',
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
  },
  label: {
    width: '40%',
    backgroundColor: 'rgba(0, 255, 255, 0.5)',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    width: '15%',
    backgroundColor: 'rgba(255, 0, 255, 0.5)',
  },
});

export default SettingNavigation;
