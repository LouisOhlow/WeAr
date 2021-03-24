import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { setAugments } from '../../../actions/filter';

class SliderSetting extends React.Component {
  /**
   * sets the height and width of the video
   *
   * @param {number} ratio the slider value between -.5 and .5
   */
  updateSize(size) {
    const { filter, setting } = this.props;
    const augments = JSON.parse(JSON.stringify(filter.selectedAugments));
    const findAugment = (augmentObject) => (augmentObject.id.toString() === setting.forObject[0]);
    const index = augments.findIndex(findAugment);
    const sizeFloat = parseFloat(size);
    augments[index].scale = [sizeFloat, sizeFloat, sizeFloat];
    this.props.setAugments(augments);
  }

  render() {
    //const { filter, setting } = this.props;
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          value={0.005}
          minimumValue={0.005}
          maximumValue={0.05}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => { this.updateSize(value.toFixed(3)); }}
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
