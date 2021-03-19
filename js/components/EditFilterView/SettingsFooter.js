import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import COLORS from '../../res/colors';
import { BUTTONS, IMAGES } from '../../res/drawables';
import AppButton from '../basics/AppButton';
import SettingNavigation from './SettingNavigation';

function SettingsFooter(props) {
  const { newFilter } = props;

  return (
    <View style={styles.container}>
      <View style={styles.setting} />
      <SettingNavigation label="PLACEHOLDER" />
      <View style={styles.buttonsection}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <Image
              style={styles.icon}
              source={BUTTONS.delete}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.save}>
          <AppButton title={newFilter ? 'CREATE' : 'SAVE'} styling="apply" />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <Image
              style={styles.icon}
              source={BUTTONS.reset}
            />
          </TouchableOpacity>
        </View>
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
  iconContainer: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  save: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconButton: {
    height: 45,
    width: 45,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsFooter;
