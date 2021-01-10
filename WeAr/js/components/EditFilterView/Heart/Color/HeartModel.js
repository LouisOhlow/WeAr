import React from 'react';
import {
  ViroARScene,
  ViroMaterials,
  ViroOmniLight,
  Viro3DObject,
  ViroARCamera,
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
          position={[0, 0, -0.05]}
          rotation={[270, 0, 90]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
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

export default connect(mapStateToProps)(HeartModel);
