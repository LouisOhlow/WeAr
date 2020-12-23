import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import ScreenshotButton from './ui/ScreenshotButton';
import ARCamera from './ar/ARCamera';
import curDateTime from '../../utils/time/curDateTime';
import VideoTimer from './ui/VideoTimer';
import NavigationButton from '../navigation/NavigationButton';
import { CardStyleInterpolators } from 'react-navigation-stack';
import { changeFilter } from '../../actions/filter';
import { connect } from 'react-redux';
import NAVIGATION_OPTIONS from '../../navigation/navigationOptions';

/**
 * Container for the Camera Elements and Root for the AR Logic
 */
class ARContainer extends Component {
  /**
   * creates the needed reference for the AR Scene
   * provides the configs for the Screen Change Animation
   */
  constructor() {
    super();
    this._arScene = React.createRef();

    const config = {
      animation: 'spring',
      gestureDirection: 'vertical',
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    };
  }

  /**
   * contains the options for navigating the screens
   */
  static navigationOptions = NAVIGATION_OPTIONS;

  state = { 
    isRecording: false,
    fadeAnimation: new Animated.Value(0),
    videoDuration: null,
    interval: null
  };

  /**
   * invokes the animation for shooting a photo
   */
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

  /**
   * captures a photo and saves it to the Phones gallery
   */
  capturePhoto = async () => {
    await this._arScene.sceneNavigator.takeScreenshot(curDateTime(), true);
    this.photoAnimation();
  }

  /**
   * starts recording the video 
   * invokes the recording animation
   */
  startVideo = () => {
    this._arScene.sceneNavigator.startVideoRecording(curDateTime(), true, () => {
    });
    this.setState({isRecording: true, interval: setInterval(() => {
      this.setSeconds();
    }, 1000)
  });
  }

  /**
   * sets the seconds which represent the video duration
   */
  setSeconds = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        videoDuration: prevState.videoDuration + 1
      }
    });
  }

  /**
   * stops the video recording and saves it to the phones gallery
   */
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

  /**
   * changes the state so the chosen filter will be available in the app
   * 
   * @param {string} node name of the filter
   * @param {number} index index to get a specific filter configuration
   */
  setFilter = (node, index) => {
    const filter = {
      node: 'flower',
      index: 0
    }
    this.props.change(filter);
  } 

  /**
   * renders the AR Scene and UI elements from the Camera
   */
  render(){
    return (
      <View style={styles.container}>
       <ViroARSceneNavigator
          ref={(c) => this._arScene = c}
          initialScene={{ scene: ARCamera }}
          autofocus={true}
          numberOfTrackedImages={6}
        />
        <Animated.View style={[styles.camAnimation, {opacity: this.state.fadeAnimation}]}/> 
        <VideoTimer time={this.state.videoDuration} />
        <ScreenshotButton capturePhoto={() => this.capturePhoto() } startVideo={() => {this.startVideo()}} stopVideo={() => {this.stopVideo()}} />
        <View style={styles.buttonContainer}>
          <NavigationButton onPress={() => this.props.navigation.navigate('Browse')} direction={'down'}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    filter: state.filterRed.selectedNode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (filter) => dispatch(changeFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ARContainer);

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
  },
  buttonContainer: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
