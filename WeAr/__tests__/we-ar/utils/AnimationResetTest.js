import { addResetAnimation } from '../../../js/utils/ar/ARAnimationHelper'

/**
 * checks if the initial object properties are being set 
 * to reset the animation by passing an empty animation array
 */
describe('test animation reset', () => {
  it('testing with empty animation', () => {
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
  animation = [[{
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
  const animationData = [[]]
  const resetAnimation = addResetAnimation(animationData, augments);
  expect(resetAnimation).toEqual(animation)
});

it('testing with existing animation', () => {
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
  const animation = [[{
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
  }]]
  
  const animationWReset = [[
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
  const resetAnimation = addResetAnimation(animation, augments);
  expect(resetAnimation).toEqual(animationWReset)
});
});
