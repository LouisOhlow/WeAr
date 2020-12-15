/**
 * gets the Filter from the db by node and index
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object} Filter object with info about all augments and media objects in the scene
 */
export const getFilterByNode = (realm, node, index) => {
  const filter = realm.objects('Filter').filtered(`node = '${node}' AND index = '${index}'`);
  return filter;
};

/**
 * gets all Augments from the Realm
 *
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object[]} list of augments
 */
export const getAugmentsByNode = (realm, node, index) => {
  const filter = getFilterByNode(realm, node, index);
  const augmentIds = filter[0].augments;
  const augments = [];
  augmentIds.forEach((id) => {
    const augment = realm.objects('Augment').filtered(`id = '${id}'`);
    augments.push(augment[0]);
  });
  return augments;
};

/**
 * gets all Media objects from the Realm
 *
 * @param {object} realm the database connection
 * @param {string} node image node to which the animation is setup
 * @param {number} index index to identify which Filter of the image node to load
 * @returns {object[]} list of media objects
 */
export const getMediaByNode = (realm, node, index) => {
  const filter = getFilterByNode(realm, node, index);
  const mediaIds = filter[0].media;
  const media = [];
  mediaIds.forEach((id) => {
    const mediaPlane = realm.objects('Media').filtered(`id = '${id}'`);
    media.push(mediaPlane[0]);
  });
  return media;
};

/**
 * gets all Animations for the objects from the realm
 *
 * @param {object} realm the database connection
 * @param {objects[]} objects either an array of augments or media objects
 * @returns {object[]} all animations which are needed in this scene
 */
export const getAnimationsByObject = (realm, objects) => {
  const allAnimations = [];

  objects.forEach((object, objectIndex) => {
    const objectAnimations = [];

    object.animation.forEach((id) => {
      const animation = realm.objects('Animation').filtered(`id = '${id}'`);
      objectAnimations.push(animation[0]);
    });

    allAnimations[objectIndex] = objectAnimations;
  });
  return allAnimations;
};
