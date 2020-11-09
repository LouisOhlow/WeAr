import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppButton from '../components/atoms/basics/AppButton';
import ARContainer from '../components/molecules/ar/ARContainer';

class CameraScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>CameraScreen</Text>
        <AppButton onPress={() => this.props.navigation.navigate('Browse')} />
      </View>
    );
  }
}

class BrowseFilterScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>BrowseFilterScreen</Text>
        <AppButton onPress={() => this.props.navigation.navigate('Camera')} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Camera: CameraScreen,
  Browse: BrowseFilterScreen,
},
{
  initialRouteName: 'Browse',
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
