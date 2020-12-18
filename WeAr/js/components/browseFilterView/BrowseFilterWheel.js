import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Headline1 from '../basics/Headline1';
import WheelSection from './WheelSection';

const BrowseFilterWheel = (props) => {
  const { navigate } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline1 text="CHOOSE FILTER SETTING" />
      </View>
      <View styles={styles.wheel}>
        <Text text="hallo" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    width: '100%',
    height: '100%',
  },
  wheel: {
    backgroundColor: '#222222',
    height: '100%',
    width: '100%',
  },
  header: {
    alignSelf: 'center',
  },
});

export default BrowseFilterWheel;
