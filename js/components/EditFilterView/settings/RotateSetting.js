import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { BUTTONS } from '../../../res/drawables';
import IconButton from '../../basics/IconButton';
import { setMedia } from '../../../actions/filter';
import alert from '../../../utils/alert/Alert';

class RotateSetting extends React.Component {
  rotate = () => {
    const { filter, setting } = this.props;
    const media = JSON.parse(JSON.stringify(filter.selectedMedia));
    const findMedia = (mediaObject) => (mediaObject.id === setting.forObject[0]);
    const mediaIndex = media.findIndex(findMedia);
    media[mediaIndex].rotation += 90;
    this.props.setMedia(media);
  }

  render() {
    return (
      <View style={styles.container}>
        <IconButton source={BUTTONS.turn} onPress={() => { this.rotate(); }} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setMedia: (media) => dispatch(setMedia(media)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RotateSetting);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
