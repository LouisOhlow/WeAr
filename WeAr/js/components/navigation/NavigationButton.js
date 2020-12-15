/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

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
