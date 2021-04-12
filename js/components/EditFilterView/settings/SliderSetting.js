import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';
import { setAugments } from '../../../actions/filter';

class SliderSetting extends React.Component {
  /**
   * sets the height and width of the video
   *
   * @param {number} ratio the slider value between -.5 and .5
   */
  updateSize(size) {
    this.props.runAnimation(false);
    const { filter, setting } = this.props;
    const augments = JSON.parse(JSON.stringify(filter.selectedAugments));
    const index = setting.forObject[0];
    setting.forField.forEach((f) => {
      const field = f.split('-');
      const fieldName = field[0];
      const fieldIndex = field[1];
      augments[index][fieldName][fieldIndex] = size;
    });
    this.props.setAugments(augments);
  }

  render() {
    const { filter, setting } = this.props;
    const editedAugments = JSON.parse(JSON.stringify(filter.selectedAugments));
    const editedAugment = editedAugments[setting.forObject[0]];

    const field = setting.forField[0].split('-');
    const { minValue, maxValue } = setting;

    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          value={editedAugment[field[0]][0]}
          minimumValue={minValue}
          maximumValue={maxValue}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          step={(maxValue - minValue) / 20}
          onValueChange={(value) => { this.updateSize(value); }}
          onSlidingComplete={() => this.props.runAnimation(true)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setAugments: (media) => dispatch(setAugments(media)),
  runAnimation: (run) => dispatch(runAnimation(run)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderSetting);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  slider: {
    width: '80%',
    alignSelf: 'center',
  },
});
