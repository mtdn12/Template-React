import { all } from 'redux-saga/effects'

import authenticationSagas from './Authentication/Sagas'
import globalSagas from './Global/Sagas'
import startupSagas from './Startup/Sagas'
import productSagas from './Product/Sagas'

function* rootSaga() {
  yield all([
    ...authenticationSagas,
    ...globalSagas,
    ...startupSagas,
    ...productSagas,
  ])
}
export default rootSaga
