import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Image,
} from 'react-native';
import COLORS from '../../res/colors';
import { BUTTONS } from '../../res/drawables';
import AppButton from '../basics/AppButton';
import Headline3 from '../basics/Headline3';

function SettingNavigation({ label, nextSetting, lastSetting }) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.buttonContainer} onPress={lastSetting}>
        <Image
          source={BUTTONS.settingArrowLeft}
          style={styles.buttons}
        />
      </TouchableOpacity>
      <View style={styles.label}>
        <Headline3 text={label} />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={nextSetting}>
        <Image
          source={BUTTONS.settingArrowRight}
          style={styles.buttons}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  label: {
    width: '40%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default SettingNavigation;
