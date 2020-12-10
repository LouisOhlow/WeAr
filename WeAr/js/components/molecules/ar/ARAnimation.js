import React from 'react';
import {
  getAugmentsByNode, getMediaByNode, getAnimationsByObject,
} from '../../../data/db/dataController';
import {
  closeRealm, openRealm,
} from '../../../data/db/realmController';
import registerAnimations from '../../../utils/ar/ARAnimationHelper';
import { setupAugments, setupMedia } from '../../atoms/ar/SceneUnits';

export default class ARAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      realm: null, medias: [], augments: []
    };
  }

  componentDidMount() {
    // later getting from BrowseFilterView choice
    const index = 0;
    const node = 'flower';
    const realm = openRealm();

    this.setupAnimation(realm, node, index);
  }

  componentWillUnmount() {
    const { realm } = this.state;
    closeRealm(realm);
  }

  setupAnimation = (realm, node, index) => {
    const augments = getAugmentsByNode(realm, node, index);
    const medias = getMediaByNode(realm, node, index);

    const augmentAnimations = getAnimationsByObject(realm, augments);
    const mediaAnimations = getAnimationsByObject(realm, medias);

    registerAnimations(augmentAnimations, 'augment');
    registerAnimations(mediaAnimations, 'media');

    this.setState({
      augments,
      medias,
      realm
    })
  }

  render() {
    const { realm, medias, augments } = this.state;

    if (!realm) {
      return null;
    }

    const videos3D = setupMedia(medias)
    const objects3D = setupAugments(augments)

    return (
      <>
        {objects3D}
        {videos3D}
      </>
    );
  }
}
