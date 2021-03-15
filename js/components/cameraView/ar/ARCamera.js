import React, { useState } from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroOmniLight,
  ViroARCamera,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroText,
} from 'react-viro';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';
import ARAnimation from './ARAnimation';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function ARCamera(props) {
  const { filter, view } = props;
  const stickToCam = !(view.index === 0);
  const [camera, setCamera] = useState([0, 0, 0]);

  ViroMaterials.createMaterials({
    box: {
      lightingModel: 'Lambert',
      diffuseColor: '#000000',
      shininess: 0.1,
    },
  });
  /**
   * renders the Scene which contains the Light
   * and all objects including their animations
   */
  return (
    <ViroARScene
      onCameraTransformUpdate={(cam) => { setCamera(cam.cameraTransform); }}
    >
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
        <ViroNode opacity={stickToCam ? 0 : 1}>
          <ARAnimation />
        </ViroNode>
      </ViroARImageMarker>
      <ViroNode
        position={camera.position}
        rotation={camera.rotation}
        opacity={stickToCam ? 1 : 0}
      >
        <ViroBox
          height={10}
          length={0.5}
          position={[0, 0, -5]}
          width={10}
          materials={['box']}
          opacity={0.6}
        />
        <ViroNode position={[0, 0, -0.4]}>
          <ViroNode rotation={[90, 0, 0]} scale={[1.4, 1.4, 1.4]}>
            <ARAnimation />
          </ViroNode>
        </ViroNode>
      </ViroNode>
    </ViroARScene>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
  view: state.viewRed.view,
});

const mapDispatchToProps = (dispatch) => ({
  startAnimation: (run) => dispatch(runAnimation(run)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARCamera);
