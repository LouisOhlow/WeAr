import React, { Component } from 'react';
import {
  ViroARScene,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroOmniLight,
} from 'react-viro';
import ARAnimation from './ARAnimation';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
export default class ARCamera extends Component {
  constructor() {
    super();
    this.onInitialized = this.onInitialized.bind(this);
  }

  /**
   * handles Tracking problems from the ARScene
   * @param {object} state
   */
  onInitialized(state) {
    if (state === ViroConstants.TRACKING_NORMAL) {
    } else if (state === ViroConstants.TRACKING_NONE) {
    }
  }

  /**
   * renders the Scene which contains the Light
   * and all objects including their animations
   */
  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroOmniLight
          position={[0, -0.25, 0]}
          color="#777777"
          intensity={20000}
        />
        <ViroARImageMarker target="targetOne">
          <ARAnimation animation="flower" />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

/**
 * creates the ImageTarget
 */
ViroARTrackingTargets.createTargets({
  'targetOne': {
    source: require('../../../data/ar_dummy/img_node4.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});
