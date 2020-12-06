import React from 'react';
import {
  Viro3DObject, ViroVideo, ViroNode, ViroText,
} from 'react-viro';
import {
  getFilterByNode, getAugmentsByNode, getMediaByNode, getAnimationsByAugment,
} from '../../../data/db/FilterController';
import { closeRealm, openRealm } from '../../../data/db/realmController';

export default class ARAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null, augments: null, animations: null, media: null,
    };
  }

  componentDidMount() {
    this.setState({ realm: openRealm() });
  }

  componentWillUnmount() {
    const { realm } = this.state;
    closeRealm(realm);
  }

  render() {
    const { realm } = this.state;

    const flower = require('../../../data/ar_dummy/flower3.obj');
    const material = require('../../../data/ar_dummy/flower3.mtl');

    // later to get through redux state management
    const index = 0;
    const node = 'flower';

    const filter = realm ? getFilterByNode(realm, node, index) : [];
    const augments = realm ? getAugmentsByNode(realm, node, index) : [];
    const media = realm ? getMediaByNode(realm, node, index) : [];
    const animations = realm ? getAnimationsByAugment(realm, augments) : [];

    const objects3D = (augments.length > 0) && augments.map((augment) => (
      <Viro3DObject
        source={flower}
        resources={[material]}
        position={[augment.position[0], augment.position[1], augment.position[2]]}
        scale={[augment.scale[0], augment.scale[1], augment.scale[2]]}
        type="OBJ"
        animation={{
          name: 'bounceFlower', run: true, loop: true, delay: 5000,
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
            name: 'showVideo', run: true, loop: true, delay: 6000,
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
        {/* <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0, 0, 0]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 5000,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.05, 0.01, 0.03]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3500,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.05, 0.003, 0.05]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3300,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.04, 0.005, -0.04]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4800,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.015, -0.001, -0.045]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4700,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.02, 0.012, 0.04]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3650,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.02, 0.006, 0.005]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4550,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.02, 0.012, -0.045]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4550,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.043, 0.007, -0.027]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4000,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.02, 0.009, 0.03]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4000,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.02, 0.01, -0.02]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4000,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.037, 0.012, -0.065]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3800,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.01, 0.005, -0.025]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3300,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.024, 0.008, 0.0012]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4400,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.002, 0.01, 0.023]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4800,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.038, 0.013, -0.013]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4200,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.037, 0.007, 0.016]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4500,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.002, 0.01, 0.056]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3900,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[-0.025, 0.006, 0.06]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3400,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.034, 0.007, 0.057]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 4600,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.04, 0.005, -0.057]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3500,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.0023, 0.006, -0.062]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 3500,
          }}
        />
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0.046, 0.011, -0.002]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'rotateAndMove', run: true, loop: true, delay: 3500,
          }}
        /> */}
      </>
    );
  }
}
