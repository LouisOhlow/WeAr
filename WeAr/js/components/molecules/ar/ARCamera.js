import React, { Component } from 'react';
import {
  ViroARScene,
  ViroConstants,
  ViroText,
} from 'react-viro';

export default class ARCamera extends Component {
  constructor() {
    super();
    this.onInitialized = this.onInitialized.bind(this);
  }

  onInitialized(state) {
    if (state === ViroConstants.TRACKING_NORMAL) {
    } else if (state === ViroConstants.TRACKING_NONE) {
    }
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroText
          text="Hello World!"
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
        />
      </ViroARScene>
    );
  }
}
