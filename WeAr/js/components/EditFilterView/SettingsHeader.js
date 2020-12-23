import React from 'react';
import { View, StyleSheet } from 'react-native';
import Headline1 from '../basics/Headline1';
import SettingsNavigationButton from '../navigation/SettingsNavigationButton';

function SettingsHeader(props) {
  const { navigate } = props;

  return (
    <View style={styles.container}>
      <SettingsNavigationButton usage="cancel" onPress={() => navigate()}/>
      <Headline1 text="FILTER SETTINGS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: '#222222',
  },
});

export default SettingsHeader;
