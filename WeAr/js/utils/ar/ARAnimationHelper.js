import { ViroAnimations } from 'react-viro';

const registerAnimations = (animations, prefix) => {
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

export default registerAnimations;
