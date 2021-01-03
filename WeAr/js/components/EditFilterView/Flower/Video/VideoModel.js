import React from 'react';
import {
  ViroARScene,
  ViroOmniLight,
  ViroVideo,
  ViroARCamera,
  ViroNode,
} from 'react-viro';
import { connect } from 'react-redux';
import { setFlowerVideo } from '../../../../actions/flower';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function VideoModel(props) {
  const { flower } = props;

  function getVideo() {
    if (flower.video === 'basic') {
      return require('../../../../data/media/flower0.mp4');
    }
    const video = { uri: flower.video };
    return video;
  }

  /**
   * displaying the AR Scene with the flower model and light which stick to the camera
   */
  return (
    <ViroARScene>
      <ViroARCamera>
        <ViroNode
          scale={[flower.height, flower.width, 1.0]}
          position={[0, 0, 0]}
        >
          <ViroVideo
            source={getVideo()}
            height={1}
            width={1}
            loop
            position={[0, 0, -2]}
            muted={false}
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
      </ViroARCamera>
    </ViroARScene>
  );
}

const mapStateToProps = (state) => ({
  flower: state.flowerRed.flower,
});

const mapDispatchToProps = (dispatch) => ({
  setFlowerVideo:
    (video) => dispatch(setFlowerVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoModel);
