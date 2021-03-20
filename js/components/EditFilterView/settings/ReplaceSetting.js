import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BUTTONS } from '../../../res/drawables';
import IconButton from '../../basics/IconButton';

function ReplaceSetting() {
  return (
    <View style={styles.container}>
      <IconButton source={BUTTONS.edit} onPress={() => {}} />
    </View>
  );
}

export default ReplaceSetting;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
