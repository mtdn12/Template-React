import { put, call, all, takeLatest } from 'redux-saga/effects'
import { GlobalActions, GlobalTypes } from 'src/Stores/Global/Actions'
import { GlobalService } from 'src/Services/GlobalService'

function* fetchConfig() {
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
