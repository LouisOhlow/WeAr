import React from 'react';
import {
  View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import COLORS from '../../drawables/colors';
import Headline1 from '../basics/Headline1';

export default function SettingsBox({ navigate, title, image }) {
  return (
    <View style={styles.setting}>
      <TouchableOpacity onPress={() => { navigate(); }} style={styles.box}>
        <Image
          style={styles.image}
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
    height: '40%',
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
  image: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 40,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.semiblack,
    borderRadius: 40,
  },
});
