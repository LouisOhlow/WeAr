import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../drawables/colors';
import Headline1 from '../basics/Headline1';
import WheelSection from './WheelSection';

/**
 * displays the filter wheel and the filter wheel headline
 */
export default function BrowseFilterWheel(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline1 text="CHOOSE FILTER SETTING" />
      </View>
      <View style={styles.wheel}>
        <WheelSection navigate={props.navigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    width: '100%',
    height: '30%',
    flex: 1,
    alignSelf: 'center',
  },
  header: {
    backgroundColor: COLORS.background,
    width: '100%',
    height: '15%',
  },
  wheel: {
    backgroundColor: COLORS.background,
    width: '100%',
    height: '85%',
    alignContent: 'center',
    alignItems: 'center',
  },
});
