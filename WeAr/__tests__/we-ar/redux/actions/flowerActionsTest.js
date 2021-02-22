import { addFlowerRotation, setFlowerColor, setFlowerRatio, setFlowerVideo } from '../../../../js/actions/flower'
import { ADD_FLOWER_ROTATION, SET_FLOWER_COLOR, SET_FLOWER_RATIO, SET_FLOWER_VIDEO } from '../../../../js/actions/types'

describe('flower actions', () => {
  it('should create an action to add rotation', () => {
    const rotation = '123'
    const expectedAction = {
      type: ADD_FLOWER_ROTATION,
      rotation
    }
    expect(addFlowerRotation(rotation)).toEqual(expectedAction)
  })
  it('should create an action to set the colors', () => {
    const primaryColor = '#993892'
    const secondaryColor = '#330044'

    const expectedAction = {
      type: SET_FLOWER_COLOR,
      primaryColor,
      secondaryColor
    }
    expect(setFlowerColor(primaryColor, secondaryColor)).toEqual(expectedAction)
  })
  it('should create an action to set flower video ratio', () => {
    const height = 1
    const width = 2
    const expectedAction = {
      type: SET_FLOWER_RATIO,
      height,
      width
    }
    expect(setFlowerRatio(height, width)).toEqual(expectedAction)
  })
  it('should create an action to set the flower video', () => {
    const src = 'https://test.source.com'
    const expectedAction = {
      type: SET_FLOWER_VIDEO,
      src
    }
    expect(setFlowerVideo(src)).toEqual(expectedAction)
  })
})
