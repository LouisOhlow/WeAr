import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationButton from '../navigation/NavigationButton';
import Headline2 from '../basics/Headline2';

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
    backgroundColor: '#222222',
    width: '100%',
  },
  button: {
    alignSelf: 'center',
    top: 0,
  },
  header: {
    alignSelf: 'center',
  },
});

export default BrowseHeader;
