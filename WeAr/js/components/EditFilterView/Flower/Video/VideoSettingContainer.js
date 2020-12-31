import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux';
import { setFlowerColor } from '../../../../actions/flower';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import SettingsFooter from '../../SettingsFooter';
import SettingsHeader from '../../SettingsHeader';

/**
 * Handles the Color Picker logic
 */
class VideoSettingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      uri: '',
    };
  }

  componentDidMount() {
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
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'video',
      durationLimit: 10,
    };
    launchImageLibrary(options, (response) => {
      this.setState({ uri: response.uri });
    });
  }

  /**
   * resets the color
   */
  reset() {
  }

  /**
   * displaying:
   */
  render() {
    return (
      <View style={styles.container}>
        <SettingsHeader title="REPLACE AR VIDEO" navigate={() => this.reset()} buttonType="back" />
        <TouchableOpacity style={styles.videoBoxContainer} onPress={() => { this.openGallery(); }}>
        </TouchableOpacity>
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
  setFlowerColors:
    (primaryColor, secondaryColor) => dispatch(setFlowerColor(primaryColor, secondaryColor)),
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
