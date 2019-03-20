import { put, call, takeLatest, all } from 'redux-saga/effects'
import jwtDecode from 'jwt-decode'
import { push } from 'connected-react-router'

import { AuthActions, AuthTypes } from 'src/Stores/Authentication/Actions'
import { AuthService } from 'src/Services/AuthService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather authentication.
 * Feel free to remove it.
 */
function* fetchAuthentication({ response }) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(AuthActions.fetchAuthenticationLoading())

  const tokenId = response.tokenId

  // Fetch the authentication from an API
  const responseResult = yield call(AuthService.fetchAuthentication, tokenId)

  if (responseResult) {
    // If Login fail
    if (responseResult.result === 'fail') {
      throw new Error(responseResult.errorMessage)
    }
    console.log(responseResult)
    // If login success
    yield put(
      AuthActions.fetchAuthenticationSuccess(jwtDecode(responseResult.token))
    )
    yield put(push('/'))
  } else {
    yield put(
      AuthActions.fetchAuthenticationFailure(
        'There was an error while fetching the authentication.'
      )
    )
  }
}
export default [takeLatest(AuthTypes.FETCH_AUTHENTICATION, fetchAuthentication)]
