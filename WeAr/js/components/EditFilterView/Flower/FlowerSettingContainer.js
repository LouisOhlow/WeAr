import React from 'react';
import {
  View, Image, Button, StyleSheet,
} from 'react-native';
import NAVIGATION_OPTIONS from '../../../navigation/navigationOptions';

// import SettingNavigationButton from '../../navigation/SettingNavigationButton';

class FlowerSettingContainer extends React.Component {
  /**
   * contains the configuration for the screen change animation
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

  render() {
    return (
      <View style={styles.container}>
        { this.props.navigation.state.params.newFilter
          && (
          <View>
            <View style={styles.header} />
            <View style={styles.body} />
            <View style={styles.footer} />
          </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  header: {
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
  },
  body: {
    height: '50%',
    width: '100%',
    backgroundColor: 'green',
  },
  footer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'blue',
  },
});

export default FlowerSettingContainer;
