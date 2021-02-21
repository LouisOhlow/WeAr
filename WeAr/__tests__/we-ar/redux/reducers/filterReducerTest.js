import filterReducer from '../../../../js/reducers/filterReducer'
import { SET_FILTER_INDEX, SET_FILTER_NODE, SET_OBJECTS } from '../../../../js/actions/types'
import SCREENS from '../../../../js/navigation/navigationScreens'

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(
      {
        filter: {
          selectedNode: SCREENS.flower,
          selectedIndex: 0,
          selectedAugments: [],
          selectedMedia: [],
          selectedMaterial: [],
        },
      }
    )
  })


  it('should handle SET FILTER INDEX', () => {
    expect(
      filterReducer(undefined, {
        type: SET_FILTER_INDEX,
        index: 3,
      })
    ).toEqual(
      {
        filter: {
            selectedNode: SCREENS.flower,
            selectedIndex: 3,
            selectedAugments: [],
            selectedMedia: [],
            selectedMaterial: [],
          },
      }
    )
  })

  it('should handle SET FILTER NODE', () => {
    expect(
      filterReducer(undefined, {
        type: SET_FILTER_NODE,
        node: SCREENS.heart,
      })
    ).toEqual(
      {
        filter: {
            selectedNode: SCREENS.heart,
            selectedIndex: 0,
            selectedAugments: [],
            selectedMedia: [],
            selectedMaterial: [],
          },
      }
    )
  })

  it('should handle SET FILTER OBJECTS', () => {
      const augments = ['a1', 'a2']
      const media =  ['m1', 'm2']
      const material = ['mat1', 'mat2']

    expect(
      filterReducer(undefined, {
        type: SET_OBJECTS,
        augments,
        media,
        material 
      })
    ).toEqual(
      {
        filter: {
            selectedNode: SCREENS.flower,
            selectedIndex: 0,
            selectedAugments: augments,
            selectedMedia: media,
            selectedMaterial: material,
          },
      }
    )
  })
})