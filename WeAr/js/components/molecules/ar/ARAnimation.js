import React from 'react';
import { Platform } from 'react-native';
import {
  Viro3DObject, ViroVideo, ViroNode, ViroText, ViroAnimations,
} from 'react-viro';
import {
  getFilterByNode, getAugmentsByNode, getMediaByNode, getAnimationsByObject,
} from '../../../data/db/FilterController';
import {
  cleanAllData, closeRealm, createData, openRealm,
} from '../../../data/db/realmController';
import registerAnimations from './ARAnimationHelper';

export default class ARAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null, platform: null,
    };
  }

  componentDidMount() {
    this.setState({ realm: openRealm(), platform: Platform.OS });
  }

  componentWillUnmount() {
    const { realm } = this.state;
    closeRealm(realm);
  }

  render() {
    const { realm, platform } = this.state;

    const flower = require('../../../data/ar_dummy/flower3.obj');
    const material = require('../../../data/ar_dummy/flower3.mtl');

    // later to get through redux state management
    const index = 0;
    const node = 'flower';

    const augments = realm ? getAugmentsByNode(realm, node, index) : [];
    const augmentAnimations = realm ? getAnimationsByObject(realm, augments) : [];

    const medias = realm ? getMediaByNode(realm, node, index) : [];
    const mediaAnimations = realm ? getAnimationsByObject(realm, medias) : [];

    if (realm) {
      registerAnimations(augmentAnimations, 'augment');
      registerAnimations(mediaAnimations, 'media');
    }

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
    // android  rotation={[0, 270, 270]}
    // ios      rotation={[90, 180, 180]}
    return (
      <>
        <ViroNode
          position={[0, 0, 0]}
          rotation={[90, 180, 180]}
          scale={[1, 1, 1]}
          animation={{
            name: 'showVideo2', run: true, loop: true, delay: 6000,
          }}
          opacity={0}
        >
          <ViroVideo
            source={require('../../../data/ar_dummy/avocado.mov')}
            height={0.12}
            width={0.1}
            loop
            position={[0, 0, 0]}
          />
        </ViroNode>
        {(augments.length > 0) && objects3D}
        {(medias.length > 0) && videos3D}
      </>
    );
  }
}
