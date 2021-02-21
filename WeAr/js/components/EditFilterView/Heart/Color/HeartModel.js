import React from 'react';
import {
  ViroARScene,
  ViroMaterials,
  ViroOmniLight,
  Viro3DObject,
  ViroARCamera,
  ViroBox,
} from 'react-viro';
import { connect } from 'react-redux';
import filterObjects from '../../../../data/objects/filters';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function HeartModel(props) {
  const { heart } = props;

  /**
   * creating the materials to live display the color changes
   * naming them by the color since there can not be duplicates
   */
  ViroMaterials.createMaterials({
    [heart.color]: {
      lightingModel: 'Lambert',
      diffuseColor: heart.color,
      shininess: 0.1,
    },
    box: {
      lightingModel: 'Lambert',
      diffuseColor: '#000000',
      shininess: 0.1,
    },
  });

  /**
   * displaying the AR Scene with the flower model and light which stick to the camera
   */
  return (
    <ViroARScene>
      <ViroARCamera>
        <Viro3DObject
          source={filterObjects[1].object}
          materials={[heart.color]}
          position={[0, 0, -0.1]}
          rotation={[90, 90, 90]}
          scale={[heart.size, heart.size, heart.size]}
          type="OBJ"
        />
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
          opacity={0.99}
        />
      </ViroARCamera>
    </ViroARScene>
  );
}

const mapStateToProps = (state) => ({
  heart: state.heartRed.heart,
});

export default connect(mapStateToProps)(HeartModel);
