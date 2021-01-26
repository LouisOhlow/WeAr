import { prepareAnimationObject, addResetAnimation } from '../../../js/utils/ar/ARAnimationHelper'
import { filter, materialList, material, augments } from './testdata'

test('test animation reset', () => {
  const augmentData = augments[0]
  const animationData = animation[1]
  const augmentAnimations = addResetAnimation(animationData, augments);
});

const animation = [[
{
  id: 2,
  scaleX: '0.005',
  scaleY: '0.005',
  scaleZ: '0.005',
  rotateY: '90',
  opacity: '1.0',
  easing: 'Bounce',
  duration: 600,
  index: 0,
},
{
  id: 4,
  easing: 'Linear',
  duration: 5000,
  rotateY: '500',
  index: 0,
},
{
  id: 1,
  positionX: '+=1',
  positionZ: '+=1',
  scaleX: '0',
  scaleY: '0',
  scaleZ: '0',
  rotateY: '500',
  easing: 'EaseIn',
  duration: 3000,
  index: 0,
},
],
[
{
  id: 2,
  scaleX: '0.005',
  scaleY: '0.005',
  scaleZ: '0.005',
  rotateY: '90',
  opacity: '1.0',
  easing: 'Bounce',
  duration: 600,
  index: 0,
},
{
  id: 4,
  easing: 'Linear',
  duration: 5000,
  rotateY: '500',
  index: 0,
},
{
  id: 1,
  positionX: '+=1',
  positionZ: '+=1',
  scaleX: '0',
  scaleY: '0',
  scaleZ: '0',
  rotateY: '500',
  easing: 'EaseIn',
  duration: 3000,
  index: 0,
}]
];
