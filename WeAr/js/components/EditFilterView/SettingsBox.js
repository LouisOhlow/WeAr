import React from 'react';
import {
  View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import COLORS from '../../res/colors';
import Headline1 from '../basics/Headline1';

export default function SettingsBox({ navigate, title, image }) {
  return (
    <View style={styles.setting}>
      <TouchableOpacity onPress={() => { navigate(); }} style={styles.box}>
        <Image
          style={styles.overlay}
          source={image}
        />
        <View style={styles.overlay} />
        <Headline1 text={title} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  setting: {
    width: '80%',
    height: 180,
    margin: 27,
  },
  box: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  overlay: {
    width: '100%',
    height: 180,
    position: 'absolute',
    backgroundColor: COLORS.semiblack,
    borderRadius: 50,
  },
});
