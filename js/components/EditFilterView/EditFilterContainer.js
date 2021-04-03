import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import SettingsFooter from './SettingsFooter';
import SettingsHeader from './SettingsHeader';

/**
 * contains the settings for the flower filter
 */
function EditFilterContainer({ navigation }) {
  const newFilter = true;

  return (
    <View>
      <SettingsHeader />
      <View style={styles.body} />
      <SettingsFooter newFilter={newFilter} navigation={navigation} />
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
