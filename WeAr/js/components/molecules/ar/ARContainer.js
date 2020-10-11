import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import SwitchCameraButton from '../../atoms/camera/SwitchCameraButton';
import ARCamera from './ARCamera';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default function ARContainer() {
  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        initialScene={{ scene: ARCamera }}
      />
      <SwitchCameraButton />
    </View>
  );
}
