/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  ViroARScene,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAnimations,
  ViroAmbientLight,
  ViroOmniLight
} from 'react-viro';
import ARAnimation from '../../../data/ar_dummy/ARAnimation';
import { ToastAndroid } from 'react-native';
  
export default class ARCamera extends Component {
  constructor() {
    super();
    this.onError = this._onError.bind(this);
    this.onInitialized = this.onInitialized.bind(this);
  }

  onInitialized(state) {
    if (state === ViroConstants.TRACKING_NORMAL) {
    } else if (state === ViroConstants.TRACKING_NONE) {
    }
  }



  onLoad = async () => {
    ToastAndroid.show('loading started !', ToastAndroid.SHORT);
  }

  _onError(event) {
    ToastAndroid.show('loading error ! ' + event.nativeEvent.error, ToastAndroid.SHORT);
  }

  render() {

    const flower = require('../../../data/ar_dummy/flower3.obj')
    const material = require('../../../data/ar_dummy/flower3.mtl')

    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroOmniLight position={[0, -0.25, 0]}
                 color="#777777"
                 intensity={20000}/>
        <ViroARImageMarker target="targetOne">
          <ARAnimation animation={'flower'}/>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

ViroARTrackingTargets.createTargets({
  'targetOne': {
    source: require('../../../data/ar_dummy/image_node.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});

ViroAnimations.registerAnimations({
  moveFlower: { properties: { positionX: '+=1', positionZ: '+=1' }, easing: 'EaseIn', duration: 5000 },
  bounce: {
    properties: {
      scaleX: 0.004,
      scaleY: 0.004,
      scaleZ: 0.004,
      opacity: 1.0,
    },
    easing: 'Bounce',
    duration: 600,
  },
  rotateFlower: { properties: { rotateY: '+=4500' }, easing: 'Linear', duration: 50000 },
  doNothing: { properties: { positionX: '+=0', positionZ: '+=0' }, easing: 'EaseIn', duration: 5000 },
  showVideo: {
    properties: {
      opacity: 1.0,
    },
    easing: 'EaseIn',
    duration: 2000,
  },
  bounceFlower: [
    ['bounce', 'doNothing', 'moveFlower'],['rotateFlower'],
  ],
});
