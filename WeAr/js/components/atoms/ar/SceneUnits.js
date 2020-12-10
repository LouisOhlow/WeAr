import React from 'react';
import { Viro3DObject, ViroNode, ViroVideo } from 'react-viro';

const flower = require('../../../data/ar_dummy/flower3.obj');
const material = require('../../../data/ar_dummy/flower3.mtl');

export function setupAugments(augments) {
  const objects3D = (augments.length > 0) && augments.map((augment, i) => (
    <Viro3DObject
      source={flower}
      resources={[material]}
      position={[augment.position[0], augment.position[1], augment.position[2]]}
      scale={[augment.scale[0], augment.scale[1], augment.scale[2]]}
      type="OBJ"
      animation={{
        name: `augment${i}`, run: true, loop: true, delay: augment.delay,
      }}
    />
  ));
  return objects3D;
}

// android  rotation={[0, 270, 270]}
// ios      rotation={[90, 180, 180]}
export function setupMedia(medias) {
  const videos3D = (medias.length > 0) && medias.map((media, i) => (
    <ViroNode
      position={[media.position[0], media.position[1], media.position[2]]}
      rotation={[90, 180, 180]}
      scale={[1, 1, 1]}
      animation={{
        name: `media${i}`, run: true, loop: media.loop, delay: 6000,
      }}
      opacity={0}
    >
      <ViroVideo
        source={require('../../../data/ar_dummy/avocado.mov')}
        height={media.width}
        width={media.height}
        loop={media.loop}
        position={[0, 0, 0]}
      />
    </ViroNode>
  ));
  return videos3D;
}
