import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../res/colors';
import NavigationButton from '../navigation/NavigationButton';

function SettingsHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.navArrow}>
          <NavigationButton direction="up" />
        </View>
        <View style={styles.colorContainer}>
          <TouchableOpacity style={styles.box} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '25%',
    width: '100%',
  },
  navArrow: {
    height: '30%',
    width: '30%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  colorContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.invisible,
    borderColor: COLORS.neutral,
    borderWidth: 2,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  box: {
    backgroundColor: 'rgba(150, 0, 100, 1)',
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});

export default SettingsHeader;

SettingsHeader.defaultProps = {
  style: styles.container,
};
