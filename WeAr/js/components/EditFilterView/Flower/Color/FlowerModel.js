import React from 'react';
import {
  ViroARScene,
  ViroARPlane,
  ViroBox,
  ViroNode,
  ViroQuad,
  ViroMaterials,
  ViroOmniLight,
  Viro3DObject,
  ViroARCamera,
  ViroText,
} from 'react-viro';
import { connect } from 'react-redux';
import COLORS from '../../../../drawables/colors';

/**
 * The AR Scene which contains all Parts of which the AR Scene is built of
 */
function FlowerModel(props) {
  const { primaryColor, secondaryColor } = props.flower;

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
          position={[0, 0.3, 0.01]}
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
