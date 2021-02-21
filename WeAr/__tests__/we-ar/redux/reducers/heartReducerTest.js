import heartReducer from '../../../../js/reducers/heartReducer'
import { SET_HEART_COLOR, SET_HEART_SIZE } from '../../../../js/actions/types'

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(heartReducer(undefined, {})).toEqual(
      {
        heart: {
            color: '#AA0000',
            size: 0.02,
          },
      }
    )
  })

  it('should handle SET HEART COLOR', () => {
    const color = '#FF88HH'

    expect(
      heartReducer(undefined, {
        type: SET_HEART_COLOR,
        color,
      })
    ).toEqual(
      {
        heart: {
            color,
            size: 0.02,
          },
      }
    )
  })

  it('should handle SET HEART SIZE', () => {
    const size = 0.08

    expect(
      heartReducer(undefined, {
        type: SET_HEART_SIZE,
        size,
      })
    ).toEqual(
      {
        heart: {
            color: '#AA0000',
            size,
          },
      }
    )
  })
})
