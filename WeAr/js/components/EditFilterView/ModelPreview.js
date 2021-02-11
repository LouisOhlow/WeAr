import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import COLORS from '../../drawables/colors';

/**
 * displays the Flower Model in an AR View
 * takes live updates from the color picker to display colors
 */
export default function ModelPreview(props) {
  const { model } = props;
  return (
    <View style={styles.container}>
      <View onPress={() => {}} style={styles.window}>
        <ViroARSceneNavigator
          initialScene={{ scene: model }}
          autofocus
          numberOfTrackedImages={6}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => { props.onPress(); }}
        style={styles.windowBorder}
      />
    </View>
  );
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
