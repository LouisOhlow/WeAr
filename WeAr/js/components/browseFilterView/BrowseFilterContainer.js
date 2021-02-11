import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import SCREENS from '../../navigation/navigationScreens';
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

  /**
   * navigates back to the CameraView
   */
  navigateToCamera = () => {
    this.props.navigation.navigate(SCREENS.camera);
  }

  /**
   * navigates to the chosen filter setting
   *
   * @param {string} newFilter the selected filter to navigate to
   */
  navigateToEditview = (newFilter) => {
    const node = this.props.filter.selectedNode;
    this.props.navigation.navigate(node, { newFilter });
  }

  /**
   * renders the BrowseFilterView parts
   */
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BrowseHeader navigate={() => this.navigateToCamera()} />
        <BrowseFilterPreview />
        <BrowseFilterWheel navigate={this.navigateToEditview} navigation={navigation} />
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
