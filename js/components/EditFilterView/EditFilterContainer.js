import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import SettingsFooter from './SettingsFooter';
import SettingsHeader from './SettingsHeader';

/**
 * contains the settings for the flower filter
 */
function EditFilterContainer({ navigation, controlScroll }) {
  const newFilter = true;

  return (
    <View>
      <SettingsHeader navigation={navigation} controlScroll={controlScroll} />
      <View style={styles.body} />
      <SettingsFooter newFilter={newFilter} navigation={navigation} controlScroll={controlScroll} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '40%',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default EditFilterContainer;
