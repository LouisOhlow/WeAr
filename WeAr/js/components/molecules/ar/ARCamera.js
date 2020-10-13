import React, { Component } from 'react';
import {
  ViroARScene,
  ViroConstants,
} from 'react-viro';

export default class ARCamera extends Component {

  constructor() {
    super();
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
    }
  }
}
