import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import SwitchCameraButton from '../../atoms/camera/SwitchCameraButton';
import ARCamera from './ARCamera';

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
    const date = new Date()
    console.log(date.getTime.toString());
    this._arScene.sceneNavigator.takeScreenshot(date.getUTCMilliseconds().toString(), true);
  }

  render(){
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          ref={(c) => this._arScene = c}
          initialScene={{ scene: ARCamera }}
          autofocus={true}
        />
        <SwitchCameraButton takeScreenshot={() => this.capturePhoto()} />
      </View>
    );
  }
  
}
