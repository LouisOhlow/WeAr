import React from 'react';
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
  const { filter } = props;
  const stickToCam = false;

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
    <ViroARScene>
      <ViroOmniLight
        position={[0, -0.25, 1]}
        color="#777777"
        intensity={10000}
      />
      {stickToCam && (
        <ViroARCamera>
          <ViroBox
            height={10}
            length={0.5}
            position={[0, 0, -3]}
            width={10}
            materials={['box']}
            opacity={0.99}
          />
          <ViroOmniLight
            position={[0, -0.25, 1]}
            color="#777777"
            intensity={10000}
          />
          <ViroNode position={[0, 0, -0.4]}>
            <ViroNode rotation={[90, 0, 0]}>
              <ARAnimation />
            </ViroNode>
          </ViroNode>
        </ViroARCamera>
      )}
      <ViroARImageMarker
        target={filter.selectedNode}
        onAnchorFound={() => {
          props.startAnimation(true);
        }}
      >
        {(!stickToCam) && <ARAnimation />}
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
