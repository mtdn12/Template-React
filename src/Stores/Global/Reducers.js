import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { GlobalTypes } from './Actions'

const setGlobalData = (state, { item }) => state.set('data', item)

const reducer = createReducer(INITIAL_STATE, {
  [GlobalTypes.GET_GLOBAL_DATA_SUCCESS]: setGlobalData,
})

export default reducer
