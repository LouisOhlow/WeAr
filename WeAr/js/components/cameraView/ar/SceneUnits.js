import React from 'react';
import {
  Viro3DObject, ViroNode, ViroVideo, ViroMaterials,
} from 'react-viro';
import { filterMap } from '../../../data/objects/filters';

/**
 * creates all needed components to display the augments correctly
 * applies all their properties from the database
 *
 * @param {boolean} run the boolean which starts the animation loop
 * @param {object} filter the filter information including selected index and node
 */
export function setupAugments(run, filter, materials) {
  const { object } = filterMap[filter.selectedNode][filter.selectedIndex];

  const objects3D = (filter.selectedAugments.length > 0)
  && filter.selectedAugments.map((augment, i) => (
    <Viro3DObject
      source={object}
      materials={materials[i]}
      position={[augment.position[0], augment.position[1], augment.position[2]]}
      scale={[augment.scale[0], augment.scale[1], augment.scale[2]]}
      type="OBJ"
      animation={{
        name: `augment${i}`, run, loop: augment.loop, delay: augment.delay,
      }}
    />
  ));
  return objects3D;
}

// android  rotation={[0, 270, 270]}
// ios      rotation={[90, 180, 180]}

/**
 * creates all needed components to display the media plane and the video it is running
 * applies all their properties from the database
 *
 * @param {boolean} run the boolean which starts the animation loop and starts the video
 * @param {object} filter the filter information including selected index and node
 * @returns
 */
export function setupMedia(run, filter) {
  const { video } = filterMap[filter.selectedNode][filter.selectedIndex];

  const videos3D = filter.selectedMedia.map((media, i) => (
    <ViroNode
      position={[media.position[0], media.position[1], media.position[2]]}
      rotation={[90, 180, 180]}
      scale={[1, 1, 1]}
      animation={{
        name: `media${i}`, run, loop: media.loop, delay: media.delay,
      }}
      opacity={0}
    >
      <ViroVideo
        source={video}
        height={media.width}
        width={media.height}
        loop={media.loop}
        position={[0, 0, 0]}
      />
    </ViroNode>
  ));
  return videos3D;
}
