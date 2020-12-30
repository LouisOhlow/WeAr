import React from 'react';
import {
  ViroARScene,
  ViroMaterials,
  ViroOmniLight,
  Viro3DObject,
  ViroARCamera,
} from 'react-viro';
import { connect } from 'react-redux';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function FlowerModel(props) {
  const { primaryColor, secondaryColor } = props.flower;

  /**
   * creating the materials to live display the color changes
   * naming them by the color since there can not be duplicates
   */
  ViroMaterials.createMaterials({
    [primaryColor]: {
      lightingModel: 'Lambert',
      diffuseColor: primaryColor,
      shininess: 0.1,
    },
    [secondaryColor]: {
      lightingModel: 'Lambert',
      diffuseColor: secondaryColor,
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
          source={require('../../../../data/objects/flower0.obj')}
          materials={[primaryColor, secondaryColor]}
          position={[0, 0, -0.05]}
          rotation={[90, 0, -90]}
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

export default connect(mapStateToProps)(FlowerModel);
