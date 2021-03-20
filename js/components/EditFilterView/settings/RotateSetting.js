import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BUTTONS } from '../../../res/drawables';
import IconButton from '../../basics/IconButton';

function RotateSetting() {
  return (
    <View style={styles.container}>
      <IconButton source={BUTTONS.turn} onPress={() => {}} />
    </View>
  );
}

export default RotateSetting;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
