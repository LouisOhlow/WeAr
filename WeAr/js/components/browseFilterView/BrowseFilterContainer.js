import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardStyleInterpolators } from 'react-navigation-stack';
import BrowseHeader from './BrowseHeader';

/**
 * contains the Browse Filter Overview Screen
 */
class BrowseFilterScreen extends React.Component {
  /**
   * contains the configuration for the screen change animation
   */
  static navigationOptions = {
    headerShown: false,
    gestureDirection: 'vertical',
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  };

  navigateToCamera = () => {
    this.props.navigation.navigate('Camera')
  }

  render() {
    return (
      <View style={styles.container}>
        <BrowseHeader navigate={() => this.navigateToCamera()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#222222',
    alignItems: 'center',
  },
});

export default BrowseFilterScreen;
