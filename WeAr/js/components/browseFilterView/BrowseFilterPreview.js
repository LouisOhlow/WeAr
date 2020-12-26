import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import COLORS from '../../drawables/colors';
import NavigationButton from '../navigation/NavigationButton';

/**
 * displays the list of all FilterNodes
 */
function BrowseFilterPreview() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <NavigationButton onPress={() => navigate()} direction="right" />
      </View>
      <View style={styles.preview}>
        <Image style={styles.shirt} source={require('../../drawables/flower_shirt.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    backgroundColor: COLORS.background,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  shirt: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
export default BrowseFilterPreview;
