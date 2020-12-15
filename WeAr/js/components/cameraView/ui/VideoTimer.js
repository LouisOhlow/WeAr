import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * displays the already recorded time
 *
 * @param {number} time the absolut time in seconds
 */
export default function VideoTimer({ time }) {
  /**
   * calculates the minutes and seconds passed
   *
   * @param {number} duration the absolut time in seconds
   */
  function displayTime(duration) {
    if (duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      if (seconds > 9) {
        return `${minutes}:${seconds}`;
      }
      return `${minutes}:0${seconds}`;
    } return null;
  }

  return (
    <View style={styles.timeContainer}>
      <Text style={styles.time}>{displayTime(time)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    position: 'absolute',
    bottom: 125,
    alignSelf: 'center',
  },
});