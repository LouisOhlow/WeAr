import React from 'react';
import {
  ViroARScene,
  ViroOmniLight,
  ViroVideo,
  ViroARCamera,
} from 'react-viro';
import { connect } from 'react-redux';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function VideoModel(props) {
  const { flower } = props;

  /**
   * displaying the AR Scene with the flower model and light which stick to the camera
   */
  return (
    <ViroARScene>
      <ViroARCamera>
        <ViroVideo
          source={flower.video}
          height={1}
          width={1}
          loop
          position={[0, 0, -2]}
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

export default connect(mapStateToProps)(VideoModel);
