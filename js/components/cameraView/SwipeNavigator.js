import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import BrowseFilterContainer from '../browseFilterView/BrowseFilterContainer';
import EditFilterContainer from '../EditFilterView/EditFilterContainer';
import CameraUI from './CameraUI';
import { setViewIndex } from '../../actions/view';
import setupAnimation from '../../utils/ar/ARSetup';
import { setSelectedObjects } from '../../actions/filter';

class SwipeNavigation extends Component {
  constructor() {
    super();
    this.state = ({
      k: true,
    });
  }

  indexChanged(index) {
    const { filter } = this.props;
    this.props.setViewIndex(index);

    //if (filter.filterData[`${filter.selectedNode}${filter.selectedIndex}`] === undefined) {
      const { augments, media, materialIds } = setupAnimation(filter);
      this.props.setObjects(augments, media, materialIds);
    //}
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
        <Swiper
          style={styles.swiper}
          loop={false}
          showsPagination
          index={0}
          horizontal={false}
          onIndexChanged={(index) => { this.indexChanged(index); }}
        >
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

const mapDispatchToProps = (dispatch) => ({
  setViewIndex:
    (index) => dispatch(setViewIndex(index)),
  setObjects:
    (augments, media, materialIds) => dispatch(setSelectedObjects(augments, media, materialIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwipeNavigation);

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
