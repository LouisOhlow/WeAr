import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import BrowseFilterContainer from '../browseFilterView/BrowseFilterContainer';
import EditFilterContainer from '../EditFilterView/EditFilterContainer';
import CameraUI from './CameraUI';

class SwipeNavigation extends Component {
  constructor() {
    super();
    this.state = ({
      k: true,
    });
  }

  /**
   * renders the AR Scene and UI elements from the Camera
   */
  render() {
    const {
      fade, duration, startVideo, stopVideo, capturePhoto, filter,
    } = this.props;
    const basicSelected = filter.selectedIndex === 0;

    return (
      <View style={styles.container}>
        <Swiper style={styles.swiper} loop={false} showsPagination index={1} horizontal={false}>
          <CameraUI
            fade={fade}
            duration={duration}
            startVideo={startVideo}
            stopVideo={stopVideo}
            capturePhoto={capturePhoto}
          />
          <BrowseFilterContainer />
          { (!basicSelected) && <EditFilterContainer /> }
        </Swiper>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

export default connect(mapStateToProps)(SwipeNavigation);

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
