import React from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroOmniLight,
} from 'react-viro';
import { connect } from 'react-redux';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function FlowerModel(props) {
  /**
   * renders the Scene which contains the Light
   * and all objects including their animations
   */
  return (
    <ViroARScene>
      <ViroOmniLight
        position={[0, -0.25, 0]}
        color="#777777"
        intensity={20000}
      />
    </ViroARScene>
  );
}

export default FlowerModel;
