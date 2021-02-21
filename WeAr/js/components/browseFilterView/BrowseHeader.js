import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationButton from '../navigation/NavigationButton';
import Headline2 from '../basics/Headline2';
import COLORS from '../../drawables/colors';

/**
 * displays the Headline and the button to move back to the CameraView component
 */
const BrowseHeader = (props) => {
  const { navigate } = props;
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <NavigationButton style={styles.button} onPress={() => navigate()} direction="up" />
      </View>
      <View style={styles.header}>
        <Headline2 text="CHOOSE FILTER" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    width: '100%',
    height: '15%',
  },
  button: {
    alignSelf: 'center',
    top: 20,
  },
  header: {
    alignSelf: 'center',
    top: 20,
  },
});

export default BrowseHeader;
