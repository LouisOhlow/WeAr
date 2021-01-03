import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { setFlowerVideo } from '../../../../actions/flower';
import { getFlowervideoByIndex } from '../../../../data/db/flower/videoDataController';
import Realm from '../../../../data/db/Realm';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import { Permission } from '../../../../utils/permission/Permission';
import permissionList from '../../../../utils/permission/PermissionList';
import ModelPreview from '../../ModelPreview';
import SettingsFooter from '../../SettingsFooter';
import SettingsHeader from '../../SettingsHeader';
import VideoModel from './VideoModel';

/**
 * Handles the Color Picker logic
 */
class VideoSettingContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Permission.requestMultiple(permissionList);
  }

  /**
   * contains the options for navigating the screens
   */
  // eslint-disable-next-line no-undef
  static navigationOptions = NAVIGATION_OPTIONS;

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
          "we need your permission man",
          [
            {
              text: "ok",
              style: "cancel"
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
   * resets the color
   */
  reset() {
    const video = getFlowervideoByIndex(Realm, this.props.filter.selectedIndex);
    this.props.setFlowerVideo(video);
  }

  /**
   * displaying:
   */
  render() {
    return (
      <View style={styles.container}>
        <SettingsHeader title="REPLACE AR VIDEO" navigate={() => this.reset()} buttonType="back" />
        <ModelPreview onPress={() => this.openGallery()} model={VideoModel} />
        <SettingsFooter title="USE" navigate={() => this.exit()} styling="apply" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  flower: state.flowerRed.flower,
  filter: state.filterRed.filter, 
});

const mapDispatchToProps = (dispatch) => ({
  setFlowerVideo:
    (video) => dispatch(setFlowerVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSettingContainer);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.background,
    justifyContent: 'center',
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
});
