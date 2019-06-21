import { put, takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'Stores/Startup/Actions'
import { push } from 'connected-react-router'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

  // Add more operations you need to do at startup here
  // ...

  // When those operations are finished we redirect to the main screen
  yield put(push('/'))
}
export default function* watcher() {
  yield all([takeLatest(StartupTypes.STARTUP, startup)])
}
