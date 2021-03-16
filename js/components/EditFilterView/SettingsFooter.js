import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../res/colors';
import AppButton from '../basics/AppButton';

function SettingsFooter(props) {
  const { newFilter } = props;

  return (
    <View style={styles.footer}>
      <View style={styles.setting} />
      <View style={styles.menu} />
      <View style={styles.buttonsection}>
        <View style={styles.delete} />
        <View style={styles.save}>
          <AppButton title={newFilter ? 'CREATE' : 'SAVE'} styling="apply" />
        </View>
        <View style={styles.revert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: COLORS.background,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 150,
  },
  footer: {
    height: '35%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 100, 0.5)',
  },
  setting: {
    width: '100%',
    height: '35%',
    backgroundColor: 'rgba(255, 50, 50, 0.5)',
  },
  menu: {
    width: '100%',
    height: '20%',
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
  },
  buttonsection: {
    width: '100%',
    height: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  delete: {
    width: '20%',
    height: '100%',
    backgroundColor: 'rgba(0, 255, 255, 0.5)',
    flexDirection: 'row',
  },
  save: {
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  revert: {
    width: '20%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    flexDirection: 'row',
  },
});

export default SettingsFooter;
