import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../drawables/colors';
import Headline1 from '../basics/Headline1';
import SettingsNavigationButton from '../navigation/SettingsNavigationButton';

function SettingsHeader(props) {
  const { navigate } = props;

  return (
    <View style={styles.container}>
      <SettingsNavigationButton usage="cancel" onPress={() => navigate()} />
      <Headline1 text="FILTER SETTINGS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: COLORS.background,
  },
});

export default SettingsHeader;
