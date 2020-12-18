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
      <View style={styles.wheel}>
        <WheelSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    width: '100%',
    height: '30%',
    flex: 1,
  },
  header: {
    backgroundColor: '#222222',
    width: '100%',
    height: '15%',
  },
  wheel: {
    backgroundColor: '#222222',
    width: '100%',
    height: '85%',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default BrowseFilterWheel;
