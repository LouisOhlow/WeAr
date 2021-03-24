import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import { ViroMaterials } from 'react-viro';
import Picker from '../Picker';
import COLORS from '../../../res/colors';
import { setMaterial } from '../../../actions/filter';
import alert from '../../../utils/alert/Alert';

/**
 * displays the color picker and two buttons
 * button 1 'apply' calls closePicker with true
 * button 2 'cancel' calls closePicker with false
 *
 * @param {string} startColor prop to set the default color to be shown
 */
class ColorSetting extends React.Component {
  constructor() {
    super();
    this.state = {
      showPicker: false,
      color: 0,
    };
  }

  /**
   * returns the color box style
   *
   * @param {string} colorType either 'secondaryColor' or 'primaryColor'
   * dependending on the color box to style
   */
  getboxStyle() {
    const { filter, setting } = this.props;
    var color = 'blue';
    if (filter.selectedMaterial.length > 0) {
      const material = JSON.parse(JSON.stringify(filter.selectedMaterial));

      const indeces = setting.forObject[0].split('-');
      if (indeces.length === 1) {
        color = material[0][indeces[0]].diffuseColor;
      } else {
        color = material[indeces[0]][indeces[1]].diffuseColor;
      }
    }

    const box = {
      width: 70,
      height: 70,
      margin: 15,
      borderWidth: 3,
      borderColor: COLORS.neutral,
      borderRadius: 50,
      backgroundColor: color,
    };

    return box;
  }

  closePicker = (save) => {
    this.setState({ showPicker: false });
    if (save) {
      const { filter, setting } = this.props;
      const { color } = this.state;

      const material = JSON.parse(JSON.stringify(filter.selectedMaterial));

      ViroMaterials.createMaterials({
        [color]: {
          lightingModel: 'Lambert',
          diffuseColor: color,
          shininess: 0.1,
        },
      });

      const indeces = setting.forObject[0].split('-');
      if (indeces.length === 1) {
        const updatedMaterial = material.map((matList) => {
          matList[indeces[0]].id = color;
          matList[indeces[0]].diffuseColor = color;
          return matList;
        });
        this.props.setMaterial(updatedMaterial);
      } else {
        material[indeces[0]][indeces[1]].id = color;
        material[indeces[0]][indeces[1]].diffuseColor = color;
        this.props.setMaterial(material);
      }
    }
  }

  setColor = (color) => {
    const colorRgb = fromHsv(color);
    this.setState({ color: colorRgb });
  }

  render() {
    const { showPicker, color } = this.state;

    return (
      <View style={styles.colorContainer}>
        {showPicker
          ? (
            <View style={styles.pickerContainer}>
              <Picker closePicker={this.closePicker} setColor={this.setColor} startColor={color} />
            </View>
          )
          : (
            <TouchableOpacity
              style={this.getboxStyle()}
              onPress={() => { this.setState({ showPicker: true }); }}
            />
          )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setMaterial: (media) => dispatch(setMaterial(media)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSetting);

const styles = StyleSheet.create({
  colorContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    alignSelf: 'baseline',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorbox: {
    width: 70,
    height: 70,
    margin: 15,
    borderWidth: 3,
    borderColor: COLORS.neutral,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  pickerContainer: {
    position: 'absolute',
    top: -300,
    height: '500%',
    width: '100%',
  },
});
