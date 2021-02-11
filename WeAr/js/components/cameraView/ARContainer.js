import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import { CardStyleInterpolators } from 'react-navigation-stack';
import { connect } from 'react-redux';
import ScreenshotButton from './ui/ScreenshotButton';
import ARCamera from './ar/ARCamera';
import curDateTime from '../../utils/time/curDateTime';
import VideoTimer from './ui/VideoTimer';
import NavigationButton from '../navigation/NavigationButton';
import { setSelectedObjects } from '../../actions/filter';
import SCREENS from '../../navigation/navigationScreens';
import setupAnimation from '../../utils/ar/ARSetup';
import SplashScreen from 'react-native-splash-screen';

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

    this.state = {
      isRecording: false,
      fadeAnimation: new Animated.Value(0),
      videoDuration: null,
      interval: null,
      active: true,
    };
  }

  /**
   * adding lifecycle methods from react-navigation to the component
   */
  componentDidMount() {
    const { filter } = this.props;

    this.props.navigation.addListener(
      'willFocus',
      () => {
        const { augments, media, materialIds } = setupAnimation(filter);
        this.props.setObjects(augments, media, materialIds);
        this.setState({
          active: true,
        });
      },
    );

    this.props.navigation.addListener(
      'didBlur',
      () => {
        const { augments, media, materialIds } = setupAnimation(filter);
        this.props.setObjects(augments, media, materialIds);
        this.setState({
          active: false,
        });
      },
    );
    SplashScreen.hide();
  }

  /**
   * invokes the animation for shooting a photo
   */
  photoAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.fadeAnimation, {
        toValue: 1,
        duration: 10,
      }),
      Animated.timing(this.state.fadeAnimation, {
        toValue: 0,
        duration: 40,
      }),
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
    this.setState({
      isRecording: true,
      interval: setInterval(() => {
        this.setSeconds();
      }, 1000),
    });
  }

  /**
   * sets the seconds which represent the video duration
   */
  setSeconds = () => {
    this.setState((prevState) => ({
      ...prevState,
      videoDuration: prevState.videoDuration + 1,
    }));
  }

  /**
   * stops the video recording and saves it to the phones gallery
   */
  stopVideo = async () => {
    if (this.state.isRecording) {
      await this._arScene.sceneNavigator.stopVideoRecording();
      this.setState((prevState) => ({
        ...prevState,
        isRecording: false,
        interval: clearInterval(prevState.interval),
        videoDuration: null,
      }));
    }
  }

  /**
   * renders the AR Scene and UI elements from the Camera
   */
  render() {
    const { fadeAnimation, videoDuration, active } = this.state;

    return (
      <View style={styles.container}>
        { active
        && (
        <ViroARSceneNavigator
          ref={(c) => this._arScene = c}
          initialScene={{ scene: ARCamera }}
          autofocus
          numberOfTrackedImages={6}
        />
        )}
        <Animated.View style={[styles.camAnimation, { opacity: fadeAnimation }]} />
        <VideoTimer time={videoDuration} />
        <ScreenshotButton
          capturePhoto={() => this.capturePhoto()}
          startVideo={() => { this.startVideo(); }}
          stopVideo={() => { this.stopVideo(); }}
        />
        <View style={styles.buttonContainer}>
          <NavigationButton onPress={() => this.props.navigation.goBack()} direction="down" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setObjects:
    (augments, media, materials) => dispatch(setSelectedObjects(augments, media, materials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARContainer);

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
