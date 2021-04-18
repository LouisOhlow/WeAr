import React from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroOmniLight,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroText,
} from '@viro-community/react-viro';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';
import ARAnimation from './ARAnimation';
import setupAnimation from '../../../utils/ar/ARSetup';
import delay from '../../../utils/delay/delay';
import { setAugments, setSelectedObjects } from '../../../actions/filter';
import copy from '../../../utils/copy';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
class ARCamera extends React.Component {
  constructor() {
    super();
    this.state = ({
      loadingStatusList: [false, false, false, false, false],
      camera: [0, 0, 0],
    });
  }

   hasLoaded = () => {
     const { loadingStatusList } = this.state;
     const loaded = loadingStatusList.every((item) => item === true);
     return loaded;
   }

  setLoadingStatus = (loaded, index) => {
    const { loadingStatusList } = this.state;
    loadingStatusList[index] = loaded;

    this.setState({ loadingStatusList });
  }

  animationFinished = async () => {
    const { animation, view, filter } = this.props;
    if (animation.run === false && view.index === 1) {
      const { augments } = setupAnimation(filter);
      await delay(200);
      const augmentsCopy = copy(augments);
      const updatedAugments = augmentsCopy.map((augment) => {
        augment.scale[0] += 0.00000001;
        augment.scale[1] += 0.00000001;
        augment.scale[2] += 0.00000001;
        return augment;
      });
      this.props.setAugments(updatedAugments);

      this.props.startAnimation(true);
    }
  }

  render() {
    const { filter, view } = this.props;
    const { camera } = this.state;
    const stickToCam = !(view.index === 0);

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
        onCameraTransformUpdate={(cam) => { this.setState({ camera: cam.cameraTransform }); }}
      >
        <ViroOmniLight
          position={camera.position}
          color="#777777"
          intensity={5000}
        />
        <ViroARImageMarker
          target={filter.selectedNode}
          onAnchorFound={() => {
            this.props.startAnimation(true);
          }}
        >
          <ViroNode opacity={stickToCam ? 0 : 1}>
            <ViroNode opacity={this.hasLoaded() ? 1 : 0}>
              <ARAnimation
                setLoadingStatus={this.setLoadingStatus}
                animationFinished={this.animationFinished}
              />
            </ViroNode>
            <ViroText
              text="LOADING..."
              rotation={[-90, 0, 0]}
              position={[0, 0, 0]}
              scale={[0.05, 0.05, 0.05]}
              opacity={this.hasLoaded() ? 0 : 1}
            />
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
              <ViroNode opacity={this.hasLoaded() ? 1 : 0}>
                <ARAnimation
                  setLoadingStatus={this.setLoadingStatus}
                  animationFinished={this.animationFinished}
                />
              </ViroNode>
              <ViroText
                text="LOADING..."
                rotation={[-90, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.05, 0.05, 0.05]}
                opacity={this.hasLoaded() ? 0 : 1}
              />
            </ViroNode>
          </ViroNode>
        </ViroNode>
      </ViroARScene>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
  view: state.viewRed.view,
  animation: state.animationRed.animation,
});

const mapDispatchToProps = (dispatch) => ({
  startAnimation: (run) => dispatch(runAnimation(run)),
  setAugments: (augments) => dispatch(setAugments(augments)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARCamera);
