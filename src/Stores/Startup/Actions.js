import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // This action is triggered when the application starts
    startup: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const StartupTypes = Types
export default Creators
