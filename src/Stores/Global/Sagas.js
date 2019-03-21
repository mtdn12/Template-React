import { put, call, all, takeLatest } from 'redux-saga/effects'
import { GlobalActions, GlobalTypes } from 'src/Stores/Global/Actions'
import { GlobalService } from 'src/Services/GlobalService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather temperature.
 * Feel free to remove it.
 */
function* fetchConfig() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  // yield put(GlobalActions.fetchTemperatureLoading())

  // Fetch the temperature from an API
  const result = yield call(GlobalService.fetchConfig)

  if (result) {
    yield put(GlobalActions.getConfigSuccess(result))
  } else {
    yield put(GlobalActions.getConfigFailure())
  }
}

export default function* watcher() {
  yield all([takeLatest(GlobalTypes.GET_CONFIG_REQUEST, fetchConfig)])
}
