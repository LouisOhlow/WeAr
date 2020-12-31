import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import { setFlowerColor } from '../../../../actions/flower';
import { getFlowercolorByIndex } from '../../../../data/db/flower/colorDataController';
import Realm from '../../../../data/db/Realm';
import COLORS from '../../../../drawables/colors';
import NAVIGATION_OPTIONS from '../../../../navigation/navigationOptions';
import SCREENS from '../../../../navigation/navigationScreens';
import SettingsFooter from '../../SettingsFooter';
import SettingsHeader from '../../SettingsHeader';
import ColorPreview from './ColorPreview';
import Picker from './Picker';

/**
 * Handles the Color Picker logic
 */
class ColorSettingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSelecting: false,
      chosenColor1: 'green',
      chosenColor2: 'red',
      editedColor: 'secondaryColor',
    };
  }

  componentDidMount() {
    const { primaryColor, secondaryColor } = this.props.flower;

    this.setState({
      chosenColor1: primaryColor,
      chosenColor2: secondaryColor,
    });
  }

  /**
   * temporarily saves the color which was chosen by the color picker
   * depending on which color was currently selected and saved to the props
   * @param {string} color the color to set in #RRGGBBAA format
   */
  setColor(color) {
    const colorRgb = fromHsv(color);
    const { editedColor } = this.state;
    const { primaryColor, secondaryColor } = this.props.flower;

    if (editedColor === 'primaryColor') {
      this.setState({
        chosenColor1: colorRgb,
        chosenColor2: secondaryColor,
      });
    } else {
      this.setState({
        chosenColor2: colorRgb,
        chosenColor1: primaryColor,
      });
    }
  }

  /**
   * returns the color box style
   *
   * @param {string} colorType either 'secondaryColor' or 'primaryColor'
   * dependending on the color box to style
   */
  getboxStyle(colorType) {
    const box = {
      backgroundColor: this.props.flower[colorType],
      borderColor: COLORS.neutral,
      borderWidth: 3,
      height: 100,
      width: 100,
      borderRadius: 50,
    };
    return box;
  }

  /**
   * opens the picker
   * notifies the state about which color is edited
   * notifies the state that a color is being selected
   *
   * @param {string} colorType either 'secondaryColor' or 'primaryColor'
   */
  openPicker(colorType) {
    this.setState({
      isSelecting: true,
      editedColor: colorType,
    });
  }

  /**
   * closes the color picker
   * if save is true, the color is set in the redux state
   *
   * @param {boolean} save true if the chosen color should be saved
   */
  closePicker(save) {
    const { chosenColor1, chosenColor2 } = this.state;
    const col1 = fromHsv(chosenColor1);
    const col2 = fromHsv(chosenColor2);

    if (save) {
      this.props.setFlowerColors(col1, col2);
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

    const colors = getFlowercolorByIndex(Realm, filter.selectedIndex);
    this.props.setFlowerColors(colors.primaryColor, colors.secondaryColor);
  }

  /**
   * displaying:
   * - the back button to return to the setting overview without saving the changes
   * - the color boxes which opens the color picker and displays the used colors
   * - the flower preview box
   * - the footer with a button to use the color set
   */
  render() {
    const { isSelecting, editedColor } = this.state;
    const startColor = this.props.flower[editedColor];

    return (
      <View style={styles.container}>
        <SettingsHeader title="EDIT FLOWER COLORS" navigate={() => this.reset()} buttonType="back" />
        <View style={styles.colorBoxContainer}>
          <View style={styles.colors}>
            <TouchableOpacity style={this.getboxStyle('primaryColor')} onPress={() => this.openPicker('primaryColor')} />
            <TouchableOpacity style={this.getboxStyle('secondaryColor')} onPress={() => this.openPicker('secondaryColor')} />
          </View>
        </View>
        <ColorPreview />
        <SettingsFooter title="USE" navigate={() => this.exit()} styling="apply" />
        { isSelecting && (
        <View style={styles.pickerContainer}>
          <Picker
            startColor={startColor}
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
  flower: state.flowerRed.flower,
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFlowerColors:
    (primaryColor, secondaryColor) => dispatch(setFlowerColor(primaryColor, secondaryColor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSettingContainer);

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
});
