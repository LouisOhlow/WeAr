import React from 'react';
import {
  Viro3DObject, ViroVideo, ViroNode,
} from 'react-viro';

export default class ARAnimation extends React.Component {
  render() {
    const flower = require('./flower3.obj');
    const material = require('./flower3.mtl');

    // android  rotation={[0, 270, 270]}
    // ios      rotation={[90, 180, 180]}
    return (
      <>
        <ViroNode
          position={[0, 0, 0]}
          rotation={[0, 270, 270]}
          scale={[1, 1, 1]}
          animation={{
            name: 'showVideo', run: true, loop: true, delay: 6000,
          }}
          opacity={0}
        >
          <ViroVideo
            source={require('./avocado.mov')}
            height={0.1}
            width={0.15}
            loop
            position={[0, 0, 0]}
          />
        </ViroNode>
        <Viro3DObject
          source={flower}
          resources={[material]}
          position={[0, 0, 0]}
          scale={[0, 0, 0]}
          type="OBJ"
          animation={{
            name: 'bounceFlower', run: true, loop: true, delay: 5000,
          }}
          onLoadStart={this.onLoad}
          onError={this.onError}
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
        />
      </>
    );
  }
}
