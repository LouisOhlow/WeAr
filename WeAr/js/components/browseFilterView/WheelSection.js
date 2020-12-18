import React from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

export default function WheelSection() {
  return (
    <View styles={styles.container}>
      <Text text="placeholer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#222222',
  },
});
