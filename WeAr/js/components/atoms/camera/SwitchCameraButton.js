import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SwitchCameraButton({takeScreenshot}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={takeScreenshot}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 50,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
