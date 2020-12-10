export const getFilterByNode = (realm, node, index) => {
  const filter = realm.objects('Filter').filtered(`node = '${node}' AND index = '${index}'`);
  return filter;
};

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
