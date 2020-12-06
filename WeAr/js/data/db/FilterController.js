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
  const filter = realm.objects('Filter').filtered(`node = '${node}' AND index = '${index}'`);
  const mediaIds = filter[0].media;
  const media = [];
  mediaIds.forEach((id) => {
    const mediaPlane = realm.objects('Media').filtered(`id = '${id}'`);
    media.push(mediaPlane[0]);
  });
  return mediaIds;
};

export const getAnimationsByAugment = (realm, augments) => {
  const allAnimations = [];

  augments.forEach((augment, augmentIndex) => {
    const augmentAnimations = [];

    augment.animation.forEach((id) => {
      const animation = realm.objects('Animation').filtered(`id = '${id}'`);
      augmentAnimations.push(animation[0]);
    });

    allAnimations[augmentIndex] = augmentAnimations;
  });
  return allAnimations;
};
