import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../res/colors';
import Headline1 from '../basics/Headline1';
import WheelSection from './WheelSection';

/**
 * displays the filter wheel and the filter wheel headline
 */
export default function BrowseFilterWheel(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline1 text="CHOOSE FILTER SETTING" />
      </View>
      <View style={styles.wheel}>
        <WheelSection navigate={props.navigate} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    height: '10%',
    marginTop: 20,
  },
  wheel: {
    width: '100%',
    height: '85%',
    alignContent: 'center',
    alignItems: 'center',
  },
});
