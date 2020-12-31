import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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
        <View style={styles.videoBoxContainer}>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
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
  },
});
