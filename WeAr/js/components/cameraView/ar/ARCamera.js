import React from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroOmniLight,
} from 'react-viro';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';
import ARAnimation from './ARAnimation';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function ARCamera(props) {
  const { filter } = props;
  /**
   * renders the Scene which contains the Light
   * and all objects including their animations
   */
  return (
    <ViroARScene>
      <ViroOmniLight
        position={[0, -0.25, 1]}
        color="#777777"
        intensity={10000}
      />
      <ViroARImageMarker
        target={filter.selectedNode}
        onAnchorFound={() => {
          props.startAnimation(true);
        }}
      >
        <ARAnimation />
      </ViroARImageMarker>
    </ViroARScene>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  startAnimation: (run) => dispatch(runAnimation(run)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARCamera);
