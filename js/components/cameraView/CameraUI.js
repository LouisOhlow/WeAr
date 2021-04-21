import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Headline2 from '../basics/Headline2';
import NavigationButton from '../navigation/NavigationButton';
import ScreenshotButton from './ui/ScreenshotButton';
import VideoTimer from './ui/VideoTimer';

class CameraUI extends Component {
  /**
   * renders the AR Scene and UI elements from the Camera
   */
  render() {
    const {
      fade, duration, startVideo, stopVideo, capturePhoto,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headline2 text="SCAN YOUR HOODIE" />
        </View>
        <Animated.View style={[styles.camAnimation, { opacity: fade }]} />
        <VideoTimer time={duration} />
        <ScreenshotButton
          capturePhoto={() => capturePhoto()}
          startVideo={() => { startVideo(); }}
          stopVideo={() => { stopVideo(); }}
        />
        <View style={styles.buttonContainer}>
          <NavigationButton onPress={() => this.props.navigation.scrollBy(1)} direction="down" />
        </View>
      </View>
    );
  }
}

export default CameraUI;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  camAnimation: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  buttonContainer: {
    width: 70,
    height: 70,
    bottom: 10,
    position: 'absolute',
    alignSelf: 'center',
  },
  header: {
    alignSelf: 'center',
    top: 60,
  },
});
