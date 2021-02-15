import React from 'react';
import {
  ViroARScene,
  ViroOmniLight,
  ViroVideo,
  ViroARCamera,
  ViroNode,
  ViroBox,
  ViroMaterials,
} from 'react-viro';
import { connect } from 'react-redux';
import { setFlowerVideo } from '../../../../actions/flower';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function VideoModel(props) {
  const { flower } = props;

  function getVideo() {
    if (flower.src === 'basic') {
      return require('../../../../data/media/flower0.mp4');
    }
    const src = { uri: flower.src };
    return src;
  }

  ViroMaterials.createMaterials({
    box: {
      lightingModel: 'Lambert',
      diffuseColor: '#000000',
      shininess: 0.1,
    },
  });

  /**
   * displaying the AR Scene with the video model and light which sticks to the camera
   */
  return (
    <ViroARScene>
      <ViroARCamera>
        <ViroNode
          scale={[flower.height, flower.width, 1.0]}
          position={[0, 0, 0]}
          rotation={[0, 0, flower.rotation]}
        >
          <ViroVideo
            source={getVideo()}
            height={0.5}
            width={0.5}
            loop
            position={[0, 0, -2]}
            muted
            onError={() => {
              props.setFlowerVideo('basic');
            }}
          />
        </ViroNode>
        <ViroOmniLight
          position={[0.3, 0.5, 0.2]}
          color="#777777"
          intensity={10000}
        />
        <ViroBox
          height={10}
          length={0.5}
          position={[0, 0, -3]}
          width={10}
          materials={['box']}
          opacity={0.95}
        />
      </ViroARCamera>
    </ViroARScene>
  );
}

const mapStateToProps = (state) => ({
  flower: state.flowerRed.flower,
});

const mapDispatchToProps = (dispatch) => ({
  setFlowerVideo:
    (src) => dispatch(setFlowerVideo(src)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoModel);
