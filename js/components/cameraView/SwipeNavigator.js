import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import BrowseFilterContainer from '../browseFilterView/BrowseFilterContainer';
import CameraUI from './CameraUI';

class SwipeNavigation extends Component {
  /**
   * renders the AR Scene and UI elements from the Camera
   */
  render() {
    const {
      fade, duration, startVideo, stopVideo, capturePhoto,
    } = this.props;

    return (
      <View style={styles.container}>
        <Swiper style={styles.swiper} loop={false} showsPagination index={1} horizontal={false} >
          <CameraUI
            fade={fade}
            duration={duration}
            startVideo={startVideo}
            stopVideo={stopVideo}
            capturePhoto={capturePhoto}
          />
          <BrowseFilterContainer />
        </Swiper>
      </View>
    );
  }
}

export default SwipeNavigation;

const styles = StyleSheet.create({
  swiper: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
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
    position: 'absolute',
    bottom: 0,
  },
});
