import { ViroAnimations } from 'react-viro';

/**
 * creates an object of all animations
 * registers them so they can be used for an 3DObject
 *
 * @param {objects[]} animations a list of animations to be registered
 * @param {string} prefix the prefix to define if the animation is for an augment or media object
 */
export const registerAnimations = (animations, prefix) => {
  const currentAnimation = {};

  animations.forEach((animationList, index) => {
    // create the object and all it's animations first, then register all Animations at once
    const mergedAnimation = [];
    animationList.forEach((animation) => {
      currentAnimation[animation.id] = {
        properties: {
          opacity: animation.opacity,
          scaleX: animation.scaleX,
          scaleY: animation.scaleY,
          scaleZ: animation.scaleZ,
          rotateX: animation.rotateX,
          rotateY: animation.rotateY,
          rotateZ: animation.rotateZ,
          positionX: animation.positionX,
          positionY: animation.positionY,
          positionZ: animation.positionZ,
        },
        easing: animation.easing,
        duration: animation.duration,
      };
      if (!Array.isArray(mergedAnimation[animation.index])) {
        mergedAnimation[animation.index] = [animation.id];
      } else {
        const temp = mergedAnimation[animation.index];

        temp.push(animation.id);

        mergedAnimation[animation.index] = temp;
      }
    });
    currentAnimation[`${prefix}${index}`] = mergedAnimation;
  });

  ViroAnimations.registerAnimations(currentAnimation);
};

/**
 *
 * @param {object[]} animations a list of an animationList
 * @param {object[]} objects a list of objects, either augments or
 */
export const addResetAnimation = (animations, objects) => {
  objects.forEach((object, i) => {
    const resetAnimation = {
      id: `a${i}reset`,
      easing: 'EaseIn',
      opacity: object.opacity,
      scaleX: object.scale[0],
      scaleY: object.scale[1],
      scaleZ: object.scale[2],
      positionX: object.position[0],
      positionY: object.position[1],
      positionZ: object.position[2],
      duration: (6000 - object.delay),
      index: 0,
    };
    animations[i].push(resetAnimation);
  });

  return animations;
};
