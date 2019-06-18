import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'global'

export const createActionName = name => `@@${MODULE_NAME}/${name}`

export const INITIAL_STATE = Map({
  data: {},
})

export default INITIAL_STATE
