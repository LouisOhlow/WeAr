import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationButton from '../../atoms/navigation/NavigationButton';
import { CardStyleInterpolators } from 'react-navigation-stack';

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
  render() {
    return (
      <View style={styles.container}>
        <NavigationButton style={styles.button} onPress={() => this.props.navigation.navigate('Camera')} direction={'up'} />
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
  button: {
      position: 'absolute',
      top: 0,
      alignSelf: 'center',
  }
});

export default BrowseFilterScreen;
