/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function NavigationButton({ onPress, direction }) {
  const getStyleByDirection = (dir) => {
    if (dir === 'up') {
      return styles.iconUp;
    }
    return styles.iconDown;
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          style={getStyleByDirection(direction)}
          source={require('../../../drawables/arrow_button.png')}
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
  iconUp: {
    height: 70,
    width: 30,
    resizeMode: 'stretch',
    transform: [{ rotate: '270deg' }],
  },
  iconDown: {
    height: 70,
    width: 30,
    resizeMode: 'stretch',
    transform: [{ rotate: '90deg' }],
  },
});
