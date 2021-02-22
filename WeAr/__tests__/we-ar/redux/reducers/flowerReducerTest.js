import flowerReducer from '../../../../js/reducers/flowerReducer'
import { ADD_FLOWER_ROTATION, SET_FLOWER_COLOR, SET_FLOWER_RATIO, SET_FLOWER_VIDEO } from '../../../../js/actions/types'

describe('flower reducer', () => {
  it('should return the initial state', () => {
    expect(flowerReducer(undefined, {})).toEqual(
      {
        flower: {
            primaryColor: '#444400',
            secondaryColor: '#555555',
            src: 'basic',
            height: 1.6,
            width: 1.6,
            rotation: 0,
          },
      }
    )
  })


  it('should handle ADD FLOWER ROTATION', () => {
    expect(
      flowerReducer(undefined, {
        type: ADD_FLOWER_ROTATION,
        rotation: 90,
      })
    ).toEqual(
      {
        flower: {
            primaryColor: '#444400',
            secondaryColor: '#555555',
            src: 'basic',
            height: 1.6,
            width: 1.6,
            rotation: 90,
          },
      }
    )
  })

  it('should handle SET FLOWER COLOR', () => {
      const primCol = '#782428'
      const secCol = '#772288'

    expect(
      flowerReducer(undefined, {
        type: SET_FLOWER_COLOR,
        primaryColor: primCol,
        secondaryColor: secCol
      })
    ).toEqual(
      {
        flower: {
            primaryColor: primCol,
            secondaryColor: secCol,
            src: 'basic',
            height: 1.6,
            width: 1.6,
            rotation: 0,
          },
      }
    )
  })

  it('should handle SET FLOWER RATIO', () => {
    const height = 1.2
    const width = 1.5

    expect(
      flowerReducer(undefined, {
        type: SET_FLOWER_RATIO,
        width,
        height
      })
    ).toEqual(
      {
        flower: {
            primaryColor: '#444400',
            secondaryColor: '#555555',
            src: 'basic',
            height,
            width,
            rotation: 0,
          },
      }
    )
  })

  it('should handle SET FLOWER VIDEO', () => {
    const src = 'https://www.test.com'
    expect(
      flowerReducer(undefined, {
        type: SET_FLOWER_VIDEO,
        src,
      })
    ).toEqual(
      {
        flower: {
            primaryColor: '#444400',
            secondaryColor: '#555555',
            src,
            height: 1.6,
            width: 1.6,
            rotation: 0,
          },
      }
    )
  })
})