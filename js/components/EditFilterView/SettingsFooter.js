import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import COLORS from '../../res/colors';
import { BUTTONS, IMAGES } from '../../res/drawables';
import AppButton from '../basics/AppButton';
import IconButton from '../basics/IconButton';
import SettingNavigation from './SettingNavigation';

function SettingsFooter(props) {
  const { newFilter } = props;

  return (
    <View style={styles.container}>
      <View style={styles.setting} />
      <SettingNavigation label="PLACEHOLDER" />
      <View style={styles.buttonsection}>
        <IconButton source={BUTTONS.delete} />
        <View style={styles.save}>
          <AppButton title={newFilter ? 'CREATE' : 'SAVE'} styling="apply" />
        </View>
        <IconButton source={BUTTONS.reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '35%',
    width: '100%',
    alignItems: 'center',
  },
  setting: {
    width: '100%',
    height: '35%',
    backgroundColor: 'rgba(255, 50, 50, 0.5)',
  },
  buttonsection: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  save: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsFooter;
