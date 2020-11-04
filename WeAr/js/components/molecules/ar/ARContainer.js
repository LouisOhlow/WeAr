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

  capturePhoto = async () => {
    const foto = await this._arScene.sceneNavigator.takeScreenshot(curDateTime(), true);
    ToastAndroid.show("shot Photo ! " + foto.url, ToastAndroid.SHORT);
  }

  startVideo = () => {
    this._arScene.sceneNavigator.startVideoRecording(curDateTime(), true, () => {
        ToastAndroid.show("could not start video !", ToastAndroid.SHORT);
    });

    ToastAndroid.show("video started ! ", ToastAndroid.SHORT);
  }
  
  stopVideo = async () => {
    const video = await this._arScene.sceneNavigator.stopVideoRecording();
    ToastAndroid.show("video stopped ! " + video.url + " " + video.success + " " + video.errorCode, ToastAndroid.SHORT);
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
