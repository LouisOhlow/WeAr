/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { BUTTONS } from '../../res/drawables';

/**
 * Button for navigation with an arrow on it
 *
 * @param {function} onPress called when the button is pressed
 * @param {string} direction either 'up' or 'down', declares the arrow direction on the button
 */
export default function NavigationButton({ onPress, direction }) {
  /**
   * changes the button direction to up or down
   *
   * @param {string} dir button arrow direction
   * @returns {object} the button style
   */
  const getStyleByDirection = (dir) => {
    switch (dir) {
      case 'up':
        return styles.iconUp;
      case 'right':
        return styles.iconRight;
      case 'left':
        return styles.iconLeft;
      case 'down':
        return styles.iconDown;
      default:
        return null;
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          style={getStyleByDirection(direction)}
          source={BUTTONS.arrow}
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
  iconRight: {
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  iconLeft: {
    height: 40,
    width: 40,
    resizeMode: 'stretch',
    transform: [{ rotate: '180deg' }],
  },
});
