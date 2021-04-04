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
    this.swiper = React.createRef();
  }

  indexChanged(index) {
    const { filter } = this.props;
    this.props.setViewIndex(index);
    const { augments, media, materialIds } = setupAnimation(filter);
    this.props.setObjects(augments, media, materialIds);
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
          loop={false}
          showsPagination={false}
          index={2}
          horizontal={false}
          onIndexChanged={(index) => { this.indexChanged(index); }}
          ref={(ref) => { this.swiper = ref; }}
        >
          <CameraUI
            fade={fade}
            duration={duration}
            startVideo={startVideo}
            stopVideo={stopVideo}
            capturePhoto={capturePhoto}
            navigation={this.swiper}
          />
          <BrowseFilterContainer navigation={this.swiper} />
          { (!basicSelected) && <EditFilterContainer navigation={this.swiper} /> }
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
  container2: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'red',
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
