import React from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroOmniLight,
} from 'react-viro';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';
import ARAnimation from './ARAnimation';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function ARCamera(props) {
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
      <ViroARImageMarker
        target="targetOne"
        onAnchorFound={() => {
          props.startAnimation(true);
        }}
      >
        <ARAnimation />
      </ViroARImageMarker>
    </ViroARScene>
  );
}

/**
 * creates the ImageTarget
 */
ViroARTrackingTargets.createTargets({
  'targetOne': {
    source: require('../../../drawables/img_node4.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
  animation: state.animationRed.animation,
});

const mapDispatchToProps = (dispatch) => ({
  startAnimation: (run) => dispatch(runAnimation(run)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARCamera);
