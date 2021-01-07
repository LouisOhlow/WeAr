import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import Slider from '@react-native-community/slider';
import { setFlowerVideo, setFlowerRatio, addFlowerRotation } from '../../../../actions/flower';
import { getVideoDataByIndex } from '../../../../data/db/flower/videoDataController';
import Realm from '../../../../data/db/Realm';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import { Permission } from '../../../../utils/permission/Permission';
import permissionList from '../../../../utils/permission/PermissionList';
import ModelPreview from '../../ModelPreview';
import SettingsHeader from '../../SettingsHeader';
import VideoModel from './VideoModel';
import Headline1 from '../../../basics/Headline1';
import AppButton from '../../../basics/AppButton';

/**
 * Handles the Color Picker logic
 */
class VideoSettingContainer extends React.Component {
  /**
   * contains the options for navigating the screens
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

  componentDidMount() {
    Permission.requestMultiple(permissionList);
  }

  /**
   * exit the screen and go back to the filter setting overview
   */
  exit() {
    this.props.navigation.goBack();
  }

  /**
   * exit the screen and go back to the filter setting overview
   */
  openGallery() {
    const options = {
      title: 'choose video',
      storageOptions: {
        skipBackup: true,
      },
      mediaType: 'video',
      durationLimit: 10,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        Alert.alert(
          response.error,
          'we need your permission man',
          [
            {
              text: 'ok',
              style: 'cancel',
            },
          ],
          { cancelable: false },
        );
      } else if (!response.didCancel) {
        this.props.setFlowerVideo(response.uri);
      }
    });
  }

  /**
   * resets all video values
   */
  reset() {
    const { filter } = this.props;
    const videoData = getVideoDataByIndex(filter.selectedIndex);
    this.props.setFlowerVideo(videoData.src);
    this.props.setFlowerRatio(videoData.width, videoData.height);
    this.props.addFlowerRotation(videoData.rotation);
  }

  /**
   * sets the height and width of the video
   *
   * @param {number} ratio the slider value between -.5 and .5
   */
  updateRatio(ratio) {
    const height = 1 + ratio;
    const width = 1 - ratio;

    this.props.setFlowerRatio(height, width);
  }

  rotateButton() {
    this.props.addFlowerRotation(90);
  }

  /**
   * displaying:
   * - reset button
   * - video model preview
   * - the ratio slider
   * - rotation button
   * - use button
   */
  render() {
    const { flower } = this.props;

    return (
      <View style={styles.container}>
        <SettingsHeader style={styles.header} title="REPLACE AR VIDEO" navigate={() => this.reset()} buttonType="back" />
        <ModelPreview onPress={() => this.openGallery()} model={VideoModel} />
        <View style={styles.slideContainer}>
          <Headline1 text="RATIO" />
          <Slider
            style={styles.slider}
            value={flower.height - 1}
            minimumValue={-0.5}
            maximumValue={0.5}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => { this.updateRatio(value); }}
          />
        </View>
        <TouchableOpacity style={styles.turnButton} onPress={() => { this.rotateButton(); }}>
          <Image
            style={styles.turnImage}
            source={require('../../../../drawables/turn_button.png')}
          />
        </TouchableOpacity>
        <View style={styles.saveButton}>
          <AppButton onPress={() => this.exit()} title="USE" styling="apply" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  flower: state.flowerRed.flower,
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFlowerVideo: (src) => dispatch(setFlowerVideo(src)),
  setFlowerRatio: (height, width) => dispatch(setFlowerRatio(height, width)),
  addFlowerRotation: (rotation) => dispatch(addFlowerRotation(rotation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSettingContainer);

const styles = StyleSheet.create({
  header: {
    height: '15%',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.background,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  videoBoxContainer: {
    height: '60%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: COLORS.semiblack,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.neutral,
  },
  slider: {
    width: '80%',
    alignSelf: 'center',
  },
  turnButton: {
    height: 45,
    width: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.neutral,
  },
  turnImage: {
    height: 20,
    width: 20,
  },
  saveButton: {
    margin: 20,
  },
  slideContainer: {
    width: '100%',
  },
});
