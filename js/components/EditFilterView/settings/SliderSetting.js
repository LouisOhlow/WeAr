import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-gesture-handler';

function SliderSetting() {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={0}
        minimumValue={-0.5}
        maximumValue={0.5}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={() => {}}
      />
    </View>
  );
}

export default SliderSetting;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  slider: {
    width: '80%',
    alignSelf: 'center',
  },
});
