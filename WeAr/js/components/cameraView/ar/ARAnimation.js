import React from 'react';
import { connect } from 'react-redux';
import { setupAugments, setupMedia } from './SceneUnits';
import { setSelectedObjects } from '../../../actions/filter';
import { getAnimationsByObject, getAugmentsByNode, getMaterialDataByNode, getMaterialIdsByNode, getMediaByNode } from '../../../data/db/dataController';
import { addResetAnimation, registerAnimations } from '../../../utils/ar/ARAnimationHelper';
import { registerMaterials } from '../../../utils/ar/ARMaterialHelper';
import Realm from '../../../data/db/Realm';

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

    const materialData = getMaterialDataByNode(Realm, filter.selectedNode, filter.selectedIndex);
    const materialIds = getMaterialIdsByNode(Realm, filter.selectedNode, filter.selectedIndex);
    const augments = getAugmentsByNode(Realm, filter.selectedNode, filter.selectedIndex);
    const media = getMediaByNode(Realm, filter.selectedNode, filter.selectedIndex);

    const augmentAnimations = addResetAnimation(getAnimationsByObject(Realm, augments), augments);
    const mediaAnimations = addResetAnimation(getAnimationsByObject(Realm, media), media);

    registerMaterials(materialData);
    registerAnimations(augmentAnimations, 'augment');
    registerAnimations(mediaAnimations, 'media');

    this.props.setObjects(augments, media, materialIds);
  }

  /**
   * renders all AR Objects as soon as objects are set up
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
  setObjects: (augments, media, material) => dispatch(setSelectedObjects(augments, media, material)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARAnimation);
