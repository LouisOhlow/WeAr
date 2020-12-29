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
  ViroMaterials.createMaterials({
    preview1: {
      lightingModel: 'Lambert',
      diffuseColor: props.flower.primaryColor,
      shininess: 0.1,
    },
    preview2: {
      lightingModel: 'Lambert',
      diffuseColor: props.flower.secondaryColor,
      shininess: 0.1,
    },
  });

  return (
    <ViroARScene>
      <ViroARCamera>
        <Viro3DObject
          source={require('../../../../data/objects/flower0.obj')}
          materials={['preview1', 'preview2']}
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
