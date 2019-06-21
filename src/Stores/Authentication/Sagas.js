import { put, call, takeLatest, all, delay } from 'redux-saga/effects'
import jwtDecode from 'jwt-decode'
import { push } from 'connected-react-router'

import { AuthActions, AuthTypes } from 'Stores/Authentication/Actions'
import { AuthService } from 'Services/AuthService'
import { NotificationActions } from '../Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import { LoadingActions } from '../Loading/Actions'
import apiClient from '../../Services'
import { setToken } from '../../Utils/token'

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
    // console.log(responseResult)
    // If login success
    // Set token to save token in localStorage
    setToken(responseResult.token)
    // Set token in apiClient
    apiClient.headers.Authorization = responseResult.token
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

// Sagas for login and register modal in modal page
function* loginWorker({ values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    yield delay(1000)
    yield put(AuthActions.loginSuccess())
    yield put(LoadingActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    yield put(NotificationActions.showNotification('Login Success'))
    yield put(push('/product'))
  } catch (error) {
    yield put(AuthActions.loginFailure())
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}

function* registerWorker({ values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    yield delay(1000)
    yield put(AuthActions.registerSuccess())
    yield put(LoadingActions.hideLoadingAction())
    yield put(NotificationActions.showNotification('Register Success'))
    yield put(
      ModalActions.setModal('LoginModal', {
        item: {
          email: values.email,
          password: values.password,
        },
      })
    )
  } catch (error) {
    yield put(AuthActions.registerFailure())
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}

export default function* watcher() {
  yield all([
    takeLatest(AuthTypes.FETCH_AUTHENTICATION, fetchAuthentication),
    takeLatest(AuthTypes.LOGIN_REQUEST, loginWorker),
    takeLatest(AuthTypes.REGISTER_REQUEST, registerWorker),
  ])
}
