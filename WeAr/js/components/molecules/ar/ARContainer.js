import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import ScreenshotButton from '../../atoms/camera/ScreenshotButton';
import ARCamera from './ARCamera';
import curDateTime from '../../../utils/time/curDateTime';
import VideoTimer from '../../atoms/camera/VideoTimer';

export default class ARContainer extends Component {
  constructor() {
    super();
    this._arScene = React.createRef();
  }

  state = { 
    isRecording: false,
    fadeAnimation: new Animated.Value(0),
    videoDuration: null,
    interval: null
  };

  photoAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.fadeAnimation, {
        toValue: 1,
        duration: 10
      }),
      Animated.timing(this.state.fadeAnimation, {
        toValue: 0,
        duration: 40
      })
    ]).start();
  };

  capturePhoto = async () => {
    await this._arScene.sceneNavigator.takeScreenshot(curDateTime(), true);
    this.photoAnimation();
  }

  startVideo = () => {
    this._arScene.sceneNavigator.startVideoRecording(curDateTime(), true, () => {
    });
    this.setState({isRecording: true, interval: setInterval(() => {
      this.setSeconds();
    }, 1000)
  });
  }

  setSeconds = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        videoDuration: prevState.videoDuration + 1
      }
    });
  }

  stopVideo = async () => {
    if(this.state.isRecording){
      await this._arScene.sceneNavigator.stopVideoRecording();
      this.setState((prevState) => {
        return {
          ...prevState,
          isRecording: false,
          interval: clearInterval(prevState.interval),
          videoDuration: null
        }
      });
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
        <Animated.View style={[styles.camAnimation, {opacity: this.state.fadeAnimation}]}/> 
        <VideoTimer time={this.state.videoDuration} />
        <ScreenshotButton capturePhoto={() => this.capturePhoto() } startVideo={() => {this.startVideo()}} stopVideo={() => {this.stopVideo()}} />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  camAnimation: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'black',
  }
});
