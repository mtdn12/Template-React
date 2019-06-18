import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    getGlobalDataRequest: [null],
    getGlobalDataSuccess: ['item'],
    getGlobalDataFailure: ['null'],
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const GlobalTypes = Types
export const GlobalActions = Creators
