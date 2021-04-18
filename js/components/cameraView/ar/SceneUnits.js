import React from 'react';
import {
  Viro3DObject, ViroNode, ViroVideo,
} from '@viro-community/react-viro';
import OBJECTS from '../../../res/objects';
import VIDEOS from '../../../res/videos';

/**
 * creates all needed components to display the augments correctly
 * applies all their properties from the database
 *
 * @param {boolean} run the boolean which starts the animation loop
 * @param {object} filter the filter information including selected index and node
 */
export function setupAugments(run, filter, setLoadingStatus, animationFinished) {
  const { selectedMaterial } = filter;
  const objects3D = (filter.selectedAugments.length > 0)
  && filter.selectedAugments.map((augment, i) => (
    <ViroNode rotation={[...augment.rotation]}>
      <Viro3DObject
        key={i}
        source={OBJECTS[augment.node]}
        materials={[...selectedMaterial[i].map((material) => material.id.toString())]}
        position={[...augment.position]}
        scale={[...augment.scale]}
        type="OBJ"
        animation={{
          name: `augment${i}`, run: true, loop: run, delay: augment.delay, onFinish: () => animationFinished(i), interruptible: true,
        }}
        onLoadStart={() => { setLoadingStatus(false, i); }}
        onLoadEnd={() => { setLoadingStatus(true, i); }}
      />
    </ViroNode>
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
  const videos3D = filter.selectedMedia.map((media, i) => (
    <ViroNode
      key={media.id}
      position={[...media.position]}
      rotation={[90, 180, 180]}
      scale={[...media.scale]}
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
        rotation={[0, 0, media.rotation]}
        muted
      />
    </ViroNode>
  ));
  return videos3D;
}

/**
 * returns the basic video if the string is defines is
 * could later be extracted to return the default video for every mediaplane
 *
 * @param {string} src the src string either a uri or 'basic'
 */
function getVideo(src) {
  if (src === 'basic') {
    return VIDEOS.flower;
  }
  const video = { uri: src };
  return video;
}
