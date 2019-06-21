import { put, call, all, takeLatest } from 'redux-saga/effects'
import { GlobalActions, GlobalTypes } from 'Stores/Global/Actions'
import { GlobalService } from 'Services/GlobalService'

function* getGlobalDataWorker() {
  try {
    const response = yield call(GlobalService.getGlobalData)
    if (response.result === 'fail') {
      throw new Error()
    }
    yield put(GlobalActions.getGlobalDataSuccess(response.item))
  } catch (error) {
    yield put(GlobalActions.getGlobalDataFailure())
  }
  const result = yield call(GlobalService.getGlobalData)
  if (result) {
    yield put(GlobalActions.getConfigSuccess(result))
  } else {
  }
}

export default function* watcher() {
  yield all([
    takeLatest(GlobalTypes.GET_GLOBAL_DATA_REQUEST, getGlobalDataWorker),
  ])
}
