import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import Realm from '../../../../data/db/Realm';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import SettingsFooter from '../../SettingsFooter';
import SettingsHeader from '../../SettingsHeader';
import ModelPreview from '../../ModelPreview';
import Picker from '../../Picker';
import HeartModel from './HeartModel';
import { getHeartcolorByIndex } from '../../../../data/db/heart/heartColorController';
import { setHeartColor, setHeartSize } from '../../../../actions/heart';
import Slider from '@react-native-community/slider';

/**
 * Handles the Color Picker logic
 */
class HeartColorContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSelecting: false,
      chosenColor: 'red',
    };
  }

  componentDidMount() {
    const { heart } = this.props;

    this.setState({
      chosenColor: heart.color,
    });
  }

  /**
   * temporarily saves the color which was chosen by the color picker
   * depending on which color was currently selected and saved to the props
   * @param {string} color the color to set in #RRGGBBAA format
   */
  setColor(color) {
    const colorRgb = fromHsv(color);

    this.setState({
      chosenColor: colorRgb,
    });
  }

  /**
   * @returns {object} the color box style
   */
  getboxStyle() {
    const { heart } = this.props;

    const box = {
      backgroundColor: heart.color,
      borderColor: COLORS.neutral,
      borderWidth: 3,
      height: 80,
      width: 80,
      borderRadius: 50,
    };
    return box;
  }

  /**
   * opens the picker
   * notifies the state that a color is being selected
   */
  openPicker() {
    this.setState({
      isSelecting: true,
    });
  }

  /**
   * closes the color picker
   * if save is true, the color is set in the redux state
   *
   * @param {boolean} save true if the chosen color should be saved
   */
  closePicker(save) {
    const { chosenColor } = this.state;
    const col = fromHsv(chosenColor);

    if (save) {
      this.props.setHeartColor(col);
    }

    this.setState({
      isSelecting: false,
    });
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
    const { filter } = this.props;

    const colors = getHeartcolorByIndex(Realm, filter.selectedIndex);
    this.props.setHeartColor(colors.primaryColor, colors.secondaryColor);
  }

  /**
   * sets the height and width of the video
   *
   * @param {number} ratio the slider value between -.5 and .5
   */
  updateSize(size) {
    this.props.setHeartSize(size);
  }

  /**
   * displaying:
   * - the back button to return to the setting overview without saving the changes
   * - the color box which opens the color picker and displays the used colors
   * - the heart preview box
   * - the footer with a button to use the color set
   */
  render() {
    const { isSelecting } = this.state;
    const { heart } = this.props;

    return (
      <View style={styles.container}>
        <SettingsHeader title="EDIT FLOWER COLORS" navigate={() => this.reset()} buttonType="back" />
        <View style={styles.colorBoxContainer}>
          <View style={styles.colors}>
            <TouchableOpacity style={this.getboxStyle()} onPress={() => this.openPicker()} />
          </View>
        </View>
        <ModelPreview onPress={() => {}} model={HeartModel} />
        <Slider
          style={styles.slider}
          value={heart.size}
          minimumValue={0.005}
          maximumValue={0.03}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => { this.updateSize(value); }}
        />
        <SettingsFooter title="USE" navigate={() => this.exit()} styling="apply" />
        { isSelecting && (
        <View style={styles.pickerContainer}>
          <Picker
            startColor={heart.color}
            setColor={(color) => this.setColor(color)}
            style={styles.picker}
            closePicker={(save) => this.closePicker(save)}
          />
        </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  heart: state.heartRed.heart,
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setHeartColor:
    (color) => dispatch(setHeartColor(color)),
  setHeartSize:
    (size) => dispatch(setHeartSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeartColorContainer);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.background,
  },
  pickerContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.alertblack,
    position: 'absolute',
    justifyContent: 'center',
  },
  colorBoxContainer: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
  },
  colors: {
    height: '30%',
    width: '80%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: COLORS.action,
    borderColor: COLORS.neutral,
    borderWidth: 3,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  slider: {
    width: '80%',
    alignSelf: 'center',
  },
});
