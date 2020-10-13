/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function SwitchCameraButton({ switchCamera }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={switchCamera}>
        <Image
          style={styles.icon}
          source={require('../../../drawables/switch-camera.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 40,
    alignSelf: 'flex-end',
  },
  icon: {
    height: 38,
    width: 38,
  },
});
