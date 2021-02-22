import { ViroARTrackingTargets } from 'react-viro';
import filterObjects from '../../res/filters';

/**
 * creates an object of all image targets
 * registers them so they can be used for an 3DObject
 */
const registerImageTargets = () => {
  const imageTargets = {};
  filterObjects.forEach((obj) => {
    imageTargets[obj.node] = {
      source: obj.target,
      orientation: 'Up',
      physicalWidth: 0.1,
    };
  });
  ViroARTrackingTargets.createTargets(imageTargets);
};

export default registerImageTargets;
