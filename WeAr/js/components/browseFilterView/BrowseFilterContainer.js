import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardStyleInterpolators } from 'react-navigation-stack';
import BrowseFilterPreview from './BrowseFilterPreview';
import BrowseFilterWheel from './BrowseFilterWheel';
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

  /**
   * navigates back to the CameraView
   */
  navigateToCamera = () => {
    this.props.navigation.navigate('Camera')
  }

  /**
   * renders the BrowseFilterView parts
   */
  render() {
    return (
      <View style={styles.container}>
        <BrowseHeader navigate={() => this.navigateToCamera()}/>
        <BrowseFilterPreview />
        <BrowseFilterWheel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  }
});

export default BrowseFilterScreen;
