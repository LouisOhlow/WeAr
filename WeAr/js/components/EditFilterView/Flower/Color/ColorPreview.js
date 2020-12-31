import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

import COLORS from '../../../../drawables/colors';
import FlowerModel from './FlowerModel';

/**
 * displays the Flower Model in an AR View
 * takes live updates from the color picker to display colors
 */
export default class ColorPreview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.window}>
          <ViroARSceneNavigator
            initialScene={{ scene: FlowerModel }}
            autofocus
            numberOfTrackedImages={6}
          />
        </View>
        <View style={styles.windowBorder} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '45%',
    width: '90%',
    borderRadius: 20,
    borderColor: COLORS.neutral,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  windowBorder: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    borderWidth: 20,
    borderRadius: 40,
    borderColor: COLORS.background,
  },
  window: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
  },
});
