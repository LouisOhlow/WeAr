import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import COLORS from '../../../res/colors';

/**
 * The Button which handles the video and photo reaction
 *
 * @param {function} capturePhoto is called when the button is pressed
 * @param {function} startVideo is called when the button is pressed and hold down
 * @param {function} stopVideo is called when the button was pressed long and then released
 */
export default function ScreenshotButton({ capturePhoto, startVideo, stopVideo }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={capturePhoto}
        onLongPress={startVideo}
        onPressOut={stopVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 50,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
