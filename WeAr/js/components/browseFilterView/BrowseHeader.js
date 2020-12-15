import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationButton from '../navigation/NavigationButton';
import Headline2 from '../basics/Headline2';

const BrowseHeader = (props) => {
  const { navigate } = props;
  return (
    <View styles={styles.header}>
      <NavigationButton style={styles.button} onPress={() => navigate()} direction="up" />
      <Headline2 text="CHOOSE FILTER" />
    </View>
  );
};

export default BrowseHeader;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
});
