import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppButton from '../components/atoms/basics/AppButton';
import ARContainer from '../components/molecules/ar/ARContainer';

class CameraScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      },
      close: {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      }
    }
  };

  constructor() {
    super();

    const config = {
      animation: 'spring',
      config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      },
    }
  }

  render() {
    return (
      <View>
        <Text>CameraScreen</Text>
        <AppButton onPress={() => this.props.navigation.navigate('Browse')} />
      </View>
    );
  }
}

export default CameraScreen;