import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
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

  state = { isRecording: false };

  capturePhoto = async () => {
    const foto = await this._arScene.sceneNavigator.takeScreenshot(curDateTime(), true);
  }

  startVideo = () => {
    this._arScene.sceneNavigator.startVideoRecording(curDateTime(), true, () => {
    });
    this.setState({isRecording: true});
  }
  
  stopVideo = async () => {
    if(this.state.isRecording){
      const video = await this._arScene.sceneNavigator.stopVideoRecording();
      this.setState({isRecording: false});
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          ref={(c) => this._arScene = c}
          initialScene={{ scene: ARCamera }}
          autofocus={true}
        />
        <ScreenshotButton capturePhoto={() => this.capturePhoto() } startVideo={() => {this.startVideo()}} stopVideo={() => {this.stopVideo()}} />
      </View>
    );
  }
  
}
