import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../res/colors';

function SettingsHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.navArrow} />
        <View style={styles.filterColorId} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '25%',
    width: '100%',
    backgroundColor: 'rgba(100, 0, 0, 0.5)',
  },
  navArrow: {
    height: '30%',
    width: '30%',
    flex: 1,
    backgroundColor: 'rgba(0, 100, 100, 0.5)',
  },
  filterColorId: {
    height: '30%',
    width: '30%',
    flex: 1,
    backgroundColor: 'rgba(0, 255, 100, 0.5)',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 100, 100, 0.5)',
  },
});

export default SettingsHeader;

SettingsHeader.defaultProps = {
  style: styles.container,
};
