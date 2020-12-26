import React from 'react';
import { connect } from 'react-redux';
import { createData } from '../../../data/db/realmController';
import { setupAugments, setupMedia } from './SceneUnits';
import { setSelectedObjects } from '../../../actions/filter';
import { getAnimationsByObject, getAugmentsByNode, getMediaByNode } from '../../../data/db/dataController';
import { addResetAnimation, registerAnimations } from '../../../utils/ar/ARAnimationHelper';

/**
 * handles the Animation and Object Setup depending on the selected Filter
 */
class ARAnimation extends React.Component {
  componentDidMount() {
    this.setupAnimation();
  }

  /**
   * connects to the Realm
   * sets up the augment and media objects for the scene depending on node and filter
   * registers all animations so they are ready to be used by the objects
   */
  setupAnimation() {
    const { filter } = this.props;

    const realm = createData();

    const augments = getAugmentsByNode(realm, filter.selectedNode, filter.selectedIndex);
    const media = getMediaByNode(realm, filter.selectedNode, filter.selectedIndex);

    const augmentAnimations = addResetAnimation(getAnimationsByObject(realm, augments), augments);
    const mediaAnimations = addResetAnimation(getAnimationsByObject(realm, media), media);

    registerAnimations(augmentAnimations, 'augment');
    registerAnimations(mediaAnimations, 'media');

    this.props.setObjects(augments, media);
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
