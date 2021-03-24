import React from 'react';
import { connect } from 'react-redux';
import alert from '../../../utils/alert/Alert';
import { setupAugments, setupMedia } from './SceneUnits';

/**
 * handles the Animation and Object Setup depending on the selected Filter
 */
class ARAnimation extends React.Component {
  /**
   * renders all AR Objects as soon as objects are set up
   */
  render() {
    const { animation, filter } = this.props;

    if (filter.selectedAugments.length === 0 && filter.selectedMedia.length === 0) {
      return null;
    }

    //alert(filter.selectedAugments[0].scale)

    const videos3D = setupMedia(animation.run, filter);
    const objects3D = setupAugments(animation.run, filter);

    return (
      <>
        {objects3D}
        {videos3D}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
  animation: state.animationRed.animation,
});

export default connect(mapStateToProps)(ARAnimation);
