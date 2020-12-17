import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationButton from '../navigation/NavigationButton';

class BrowseFilterPreview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <NavigationButton onPress={() => navigate()} direction="right" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    backgroundColor: '#222222',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
  },
});
export default BrowseFilterPreview;
