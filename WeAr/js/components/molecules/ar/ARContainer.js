import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import ScreenshotButton from '../../atoms/camera/ScreenshotButton';
import ARCamera from './ARCamera';
import curDateTime from '../../../utils/curDateTime';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default class ARContainer extends Component {
  constructor() {
    super();
    
    this._arScene = React.createRef();
  }

  capturePhoto = () => {
    this._arScene.sceneNavigator.takeScreenshot(curDateTime(), true);
  }

  render(){
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          ref={(c) => this._arScene = c}
          initialScene={{ scene: ARCamera }}
          autofocus={true}
        />
        <ScreenshotButton capturePhoto={() => this.capturePhoto()} />
      </View>
    );
  }
  
}
