import { prepareAnimationObject } from "../../../js/utils/ar/ARAnimationHelper";

/**
 * checks if the animations are merged properly to register them
 * with viro with the right properties
 */
describe('test animation merge for animations', () => {
    it('testing for augment animations', () => {
    const augments = [{
      id: 1,
      obj: 'flower',
      material: 'flower',
      scale: [0, 0, 0],
      position: [0, 0, 0],
      animation: ['2', '4', '1'],
      delay: 1654,
      opacity: 1,
      animationReset: true,
    }]    
    const anim = [[
      {
        id: `a2`,
        easing: 'EaseIn',
        opacity: '0.4',
        scaleX: 1,
        scaleY: 3,
        scaleZ: 2,
        positionX: 4.5,
        positionY: 2.5,
        positionZ: 9.4,
        duration: 200,
        index: 0,
      },
      {
      id: `a0reset`,
      easing: 'EaseIn',
      opacity: augments[0].opacity,
      scaleX: augments[0].scale[0],
      scaleY: augments[0].scale[1],
      scaleZ: augments[0].scale[2],
      positionX: augments[0].position[0],
      positionY: augments[0].position[1],
      positionZ: augments[0].position[2],
      duration: (6000 - augments[0].delay),
      index: 0,
    }]]
    const mergedAnimationObject = 
        {'a-a2': {
            properties: {
              opacity: anim[0][0].opacity,
              scaleX: anim[0][0].scaleX,
              scaleY: anim[0][0].scaleY,
              scaleZ: anim[0][0].scaleZ,
              rotateX: anim[0][0].rotateX,
              rotateY: anim[0][0].rotateY,
              rotateZ: anim[0][0].rotateZ,
              positionX: anim[0][0].positionX,
              positionY: anim[0][0].positionY,
              positionZ: anim[0][0].positionZ,
            },
            easing: anim[0][0].easing,
            duration: anim[0][0].duration,
          },
        'a-a0reset': {
            properties: {
              opacity: anim[0][1].opacity,
              scaleX: anim[0][1].scaleX,
              scaleY: anim[0][1].scaleY,
              scaleZ: anim[0][1].scaleZ,
              rotateX: anim[0][1].rotateX,
              rotateY: anim[0][1].rotateY,
              rotateZ: anim[0][1].rotateZ,
              positionX: anim[0][1].positionX,
              positionY: anim[0][1].positionY,
              positionZ: anim[0][1].positionZ,
            },
            easing: anim[0][1].easing,
            duration: anim[0][1].duration,
          },
        'augments0': 
          [['a-' + anim[0][0].id, 'a-' + anim[0][1].id]]
        };

    const mergedAnim = prepareAnimationObject(anim, 'augments');
    expect(mergedAnim).toEqual(mergedAnimationObject)
    });
  });