import React from 'react';
import { connect } from 'react-redux';
import { createData, openRealm } from '../../../data/db/realmController';
import { setupAugments, setupMedia } from './SceneUnits';
import { setSelectedObjects } from '../../../actions/filter';
import { getCurrentAugments, getCurrentMedia, setupCurrentAnimation } from '../../../utils/ar/setupARScene';

/**
 * handles the Animation and Object Setup depending on the selected Filter
 */
class ARAnimation extends React.Component {
  componentDidMount() {
    this.setupAnimation();
  }

  /**
   * sets up the augment and media objects for the scene
   * registers all animations for Usage
   */
  setupAnimation() {
    const { filter } = this.props;

    const realm = createData();

    const augments = getCurrentAugments(realm, filter.selectedNode, filter.selectedIndex);
    const media = getCurrentMedia(realm, filter.selectedNode, filter.selectedIndex);

    this.props.setObjects(augments, media);

    setupCurrentAnimation(realm, augments, media);
  }

  /**
   * renders all AR Objects if the realm is opened
   */
  render() {
    const { animation, filter } = this.props;

    if (filter.selectedAugments.length === 0 && filter.selectedMedia.length === 0) {
      return null;
    }

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

const mapDispatchToProps = (dispatch) => ({
  setObjects: (augments, media) => dispatch(setSelectedObjects(augments, media)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARAnimation);
