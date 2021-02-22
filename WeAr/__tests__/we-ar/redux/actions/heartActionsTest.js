import { setHeartColor, setHeartSize, } from '../../../../js/actions/heart'
import { ADD_FLOWER_ROTATION, SET_FLOWER_COLOR, SET_FLOWER_RATIO, SET_FLOWER_VIDEO, SET_HEART_COLOR, SET_HEART_SIZE } from '../../../../js/actions/types'

describe('heart actions', () => {
  it('should create an action to set the heart size', () => {
    const size = 4
    const expectedAction = {
      type: SET_HEART_SIZE,
      size
    }
    expect(setHeartSize(size)).toEqual(expectedAction)
  })
  it('should create an action to set the heart color', () => {
    const color = '#237843'
    const expectedAction = {
      type: SET_HEART_COLOR,
      color
    }
    expect(setHeartColor(color)).toEqual(expectedAction)
  })
})
