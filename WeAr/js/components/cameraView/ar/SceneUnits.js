import React from 'react';
import {
  Viro3DObject, ViroNode, ViroVideo,
} from 'react-viro';
import { getFlowervideoByIndex } from '../../../data/db/flower/videoDataController';
import { filterMap } from '../../../data/objects/filters';

/**
 * creates all needed components to display the augments correctly
 * applies all their properties from the database
 *
 * @param {boolean} run the boolean which starts the animation loop
 * @param {object} filter the filter information including selected index and node
 */
export function setupAugments(run, filter) {
  const { object } = filterMap[filter.selectedNode][filter.selectedIndex];
  const { selectedMaterial } = filter;

  const objects3D = (filter.selectedAugments.length > 0)
  && filter.selectedAugments.map((augment, i) => (
    <Viro3DObject
      key={augment.id}
      source={object}
      materials={[...selectedMaterial[i]]}
      position={[...augment.position]}
      scale={[...augment.scale]}
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
      key={media.id}
      position={[...media.position]}
      rotation={[90, 180, 180]}
      scale={[1, 1, 1]}
      animation={{
        name: `media${i}`, run, loop: media.loop, delay: media.delay,
      }}
      opacity={0}
    >
      <ViroVideo
        source={getVideo(media.src)}
        height={media.width}
        width={media.height}
        loop={media.loop}
        position={[0, 0, 0]}
        muted={false}
      />
    </ViroNode>
  ));
  return videos3D;
}

function getVideo(src) {
  if (src === 'basic') {
    return require('../../../data/media/flower0.mp4');
  }
  const video = { uri: src };
  return video;
}
