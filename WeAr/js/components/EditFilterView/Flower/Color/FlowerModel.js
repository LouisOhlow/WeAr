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
function FlowerModel() {
  ViroMaterials.createMaterials({
    m0: {
      lightingModel: 'Lambert',
      diffuseColor: '#440044',
      shininess: 0.1,
    },
    m1: {
      lightingModel: 'Lambert',
      diffuseColor: '#440000',
      shininess: 0.1,
    },
  });

  return (
    <ViroARScene>
      <ViroARCamera>
        <Viro3DObject
          source={require('../../../../data/objects/flower0.obj')}
          materials={['m0', 'm1']}
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

export default FlowerModel;
