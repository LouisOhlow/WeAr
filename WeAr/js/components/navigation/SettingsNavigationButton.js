/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import COLORS from '../../drawables/colors';

/**
 * Button for navigation within the filter settings
 *
 * @param {function} onPress called when the button is pressed
 * @param {string} usage either 'cancel' or 'back', declares the arrow image to be displaye
 */
function SettingsNavigationButton({ onPress, usage }) {
  /**
   * changes the button image to back arrow or red cross
   *
   * @param {string} usg button usage
   * @returns {object} the button image
   */
  const getImageByUsage = (usg) => {
    if (usg === 'back') {
      return require('../../drawables/back_button.png');
    }
    return require('../../drawables/cancel_button.png');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          style={styles.image}
          source={getImageByUsage(usage)}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SettingsNavigationButton;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.neutral,
  },
  image: {
    height: 20,
    width: 20,
    transform: [{ rotate: '45deg' }],
  },
});
