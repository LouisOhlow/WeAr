import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
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
    this.props.navigation.navigate('Camera');
  }

  navigateToEditview = (newFilter) => {
    const node = this.props.filter.selectedNode;
    this.props.navigation.navigate(node, { newFilter });
  }

  /**
   * renders the BrowseFilterView parts
   */
  render() {
    return (
      <View style={styles.container}>
        <BrowseHeader navigate={() => this.navigateToCamera()} />
        <BrowseFilterPreview />
        <BrowseFilterWheel navigate={(newFilter) => this.navigateToEditview(newFilter)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps, null)(BrowseFilterScreen);
