import React from 'react';
import { connect } from 'react-redux';
import { setupAugments, setupMedia } from './SceneUnits';

/**
 * handles the Animation and Object Setup depending on the selected Filter
 */
function ARAnimation({ animation, filter, setLoadingStatus, animationFinished}) {
    if (filter.selectedAugments.length === 0 && filter.selectedMedia.length === 0) {
      return null;
    }

    const videos3D = setupMedia(animation.run, filter, setLoadingStatus, animationFinished);
    const objects3D = setupAugments(animation.run, filter, setLoadingStatus, animationFinished);

      return (
        <>
          {objects3D}
          {videos3D}
        </>
      );
  }

const mapStateToProps = (state) => ({
  filter: state.filterRed.filter,
  animation: state.animationRed.animation,
});

export default connect(mapStateToProps)(ARAnimation);
