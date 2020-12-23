import React from 'react';
import {
  closeRealm, openRealm
} from '../../../data/db/realmController';
import { setupAugments, setupMedia } from './SceneUnits';
import { connect } from 'react-redux';
import { runAnimation } from '../../../actions/animation';
import { setSelectedObjects } from '../../../actions/filter';
import { getCurrentAugments, getCurrentMedia, setupCurrentAnimation } from '../../../utils/ar/setupARScene';

/**
 * handles the Animation and Object Setup depending on the selected Filter
 */
class ARAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null
    };
  }

  componentDidMount() {
    this.setupAnimation();
  }

  /**
   * sets up the augment and media objects for the scene
   * registers all animations for Usage
   */
  setupAnimation = () => {
    const index = this.props.filter.selectedIndex;
    const node = this.props.filter.selectedNode;
    
    const realm = openRealm();

    const augments = getCurrentAugments(realm, node, index);
    const media = getCurrentMedia(realm, node, index);

    this.props.setSelectedObjects(augments, media);

    setupCurrentAnimation(realm, augments, media);
    
    // closeRealm(realm);
  }

  /**
   * renders all AR Objects if the realm is opened
   */
  render() {
    const run = this.props.animation.run
    const filter = this.props.filter

    if (filter.selectedAugments.length === 0 && filter.selectedMedia.length === 0) { 
      return null;
    }
  
    const videos3D = setupMedia(run, filter)
    const objects3D = setupAugments(run, filter)

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
  setSelectedObjects: (augments, media) => dispatch(setSelectedObjects(augments, media)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ARAnimation);
