import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
const INITIAL_STATE = Map({
  title: '',
  message: '',
  open: false,
  color: 'blue',
})

export default INITIAL_STATE
