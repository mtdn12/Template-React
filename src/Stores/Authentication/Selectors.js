import { MODULE_NAME } from './InitialState'

const getUserData = state => state[MODULE_NAME].get('userData')

export const AuthSelectors = {
  getUserData,
}
