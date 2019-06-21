import { create } from 'apisauce'
import { Config } from 'Config'
import { getToken } from '../Utils/token'

export const apiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
  timeout: 2000,
})

export default apiClient
