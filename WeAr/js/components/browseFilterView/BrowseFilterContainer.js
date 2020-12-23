import React from 'react';
import { View, StyleSheet } from 'react-native';
import NAVIGATION_OPTIONS from '../../navigation/navigationOptions';
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
  static navigationOptions = NAVIGATION_OPTIONS;

  /**
   * navigates back to the CameraView
   */
  navigateToCamera = () => {
    this.props.navigation.navigate('Camera')
  }

  navigateToEditview = (node) => {
    this.props.navigation.navigate('Flower')
  }

  /**
   * renders the BrowseFilterView parts
   */
  render() {
    return (
      <View style={styles.container}>
        <BrowseHeader navigate={() => this.navigateToCamera()}/>
        <BrowseFilterPreview />
        <BrowseFilterWheel navigate={() => this.navigateToEditview()}/>
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
