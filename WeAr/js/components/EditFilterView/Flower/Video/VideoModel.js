import React from 'react';
import {
  ViroARScene,
  ViroOmniLight,
  ViroVideo,
  ViroARCamera,
} from 'react-viro';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { setFlowerVideo } from '../../../../actions/flower';
import { getFlowervideoByIndex } from '../../../../data/db/flower/videoDataController';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function VideoModel(props) {
  const { flower } = props;

  function getVideo() {
    if (flower.video.uri === 'error') {
      return require('../../../../data/media/flower0.mp4');
    }
    return flower.video;
  }
  /**
   * displaying the AR Scene with the flower model and light which stick to the camera
   */
  return (
    <ViroARScene>
      <ViroARCamera>
        <ViroVideo
          source={getVideo()}
          height={1}
          width={1}
          loop
          position={[0, 0, -2]}
          muted={false}
          onError={() => {
            props.setFlowerVideo({ uri: 'error' });
          }}
        />
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
