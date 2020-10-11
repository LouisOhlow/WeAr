import React, { Component } from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import ARCamera from './ARCamera';

export default class ARContainer extends Component {
  render() {
    return (
        <ViroARSceneNavigator
          initialScene={{ scene: ARCamera }}
        />
      );
  }
}
