import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

import COLORS from '../../../../drawables/colors';
import FlowerModel from './FlowerModel';

export default class ColorPreview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.window}>
          <ViroARSceneNavigator
            ref={(c) => this._arScene = c}
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
