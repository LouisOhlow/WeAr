import { setFilterIndex, setFilterNode, setSelectedObjects, } from '../../../../js/actions/filter'
import { SET_FILTER_INDEX, SET_FILTER_NODE, SET_OBJECTS } from '../../../../js/actions/types'

describe('filter actions', () => {
  it('should create an action to set the filter index', () => {
    const index = 2
    const expectedAction = {
      type: SET_FILTER_INDEX,
      index
    }
    expect(setFilterIndex(index)).toEqual(expectedAction)
  })
  it('should create an action to set the filter node', () => {
    const node = 'flower'
    const expectedAction = {
      type: SET_FILTER_NODE,
      node
    }
    expect(setFilterNode(node)).toEqual(expectedAction)
  })
  it('should create an action to set the augment, media and material objects', () => {
    const augments = {}
    const media = {}
    const material = {}

    const expectedAction = {
      type: SET_OBJECTS,
      augments,
      media,
      material
    }
    expect(setSelectedObjects(augments, media, material)).toEqual(expectedAction)
  })
})
