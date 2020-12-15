import React from 'react';
import {
  getAugmentsByNode, getMediaByNode, getAnimationsByObject,
} from '../../../data/db/dataController';
import {
  closeRealm, openRealm, createData
} from '../../../data/db/realmController';
import { addResetAnimation, registerAnimations,  } from './ARAnimationHelper';
import { setupAugments, setupMedia } from './SceneUnits';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';

/**
 * handles the Animation and Object Setup depending on the selected Filter
 */
class ARAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null, medias: [], augments: []
    };
  }

  /**
   * opens the database after mounting to setup the Animation
   */
  componentDidMount() {
    // later getting from BrowseFilterView choice
    const index = this.props.filter.selectedIndex;
    const node = this.props.filter.selectedNode;

    const realm = createData();

    this.setupAnimation(realm, node, index);
  }

  /**
   * closes the Realm
   */
  componentWillUnmount() {
    const { realm } = this.state;
    closeRealm(realm);
  }

  /**
   * sets up the augment and media objects for the scene
   * registers all animations for Usage
   * 
   * @param {object} realm database connections
   * @param {string} node image node to which the animation is setup
   * @param {number} index index to identify which Filter of the image node to load
   */
  setupAnimation = (realm, node, index) => {
    const augments = getAugmentsByNode(realm, node, index);
    const medias = getMediaByNode(realm, node, index);

    const augmentAnimations = addResetAnimation(getAnimationsByObject(realm, augments), augments);
    const mediaAnimations = addResetAnimation(getAnimationsByObject(realm, medias), medias);

    registerAnimations(augmentAnimations, 'augment');
    registerAnimations(mediaAnimations, 'media');

    this.setState({
      augments,
      medias,
      realm
    })
  }

  /**
   * renders all AR Objects if the realm is opened
   */
  render() {
    const { realm, medias, augments } = this.state;
    const run = this.props.animation.run

    if (!realm) {
      return null;
    }

    const videos3D = setupMedia(medias, run)
    const objects3D = setupAugments(augments, run)

    return (
      <>
        {objects3D}
        {videos3D}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    filter: state.filterRed.filter,
    animation: state.animationRed.animation
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAnimation: (run) => dispatch(runAnimation(run)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARAnimation);
