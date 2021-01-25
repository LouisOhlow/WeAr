import animationReducer from '../../../../js/reducers/animationReducer'
import { RUN_ANIMATION } from '../../../../js/actions/types'

describe('animation reducer', () => {
  it('should return the initial state', () => {
    expect(animationReducer(undefined, {})).toEqual(
      {
        animation: {
            run: false,
          },
      }
    )
  })


  it('should handle RUN_ANIMATION', () => {
    expect(
      animationReducer([], {
        type: RUN_ANIMATION,
        run: true,
      })
    ).toEqual(
      {
        animation: {
            run: true,
          },
      }
    )

    expect(
        animationReducer([], {
          type: RUN_ANIMATION,
          run: false,
        })
      ).toEqual(
        {
          animation: {
              run: false,
            },
        }
      )
  })
})