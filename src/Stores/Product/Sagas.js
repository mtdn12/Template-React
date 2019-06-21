import {
  put,
  call,
  takeLatest,
  select,
  all,
  takeEvery,
} from 'redux-saga/effects'
import { ProductActions, ProductTypes } from 'Stores/Product/Actions'
import { ProductSelectors } from './Selectors'
import { NotificationActions } from 'Stores/Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import { ProductService } from '../../Services/ProductService'
import { LoadingActions } from '../Loading/Actions'
import { push } from 'connected-react-router'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'

function* getListProductWorker() {
  try {
    const filter = yield select(ProductSelectors.getFilter)
    yield put(LoadingActions.showLoadingList())
    const response = yield call(ProductService.getListProduct, filter.toJS())
    yield put(LoadingActions.hideLoadingList())
    yield put({
      type: ProductTypes.GET_ITEMS_SUCCESS,
      items: response.items,
      totalCount: response.totalCount,
      totalPages: response.totalPages,
    })
  } catch (error) {
    yield put({
      type: ProductTypes.GET_ITEMS_FAILURE,
    })
    yield put(LoadingActions.hideLoadingList())
  }
}

function* deleteItemWorker({ id }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    yield call(ProductService.deleteProduct, id)
    yield put({
      type: ProductTypes.DELETE_ITEM_SUCCESS,
    })
    yield put(LoadingActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    const filter = yield select(ProductSelectors.getFilter)
    yield put(ProductActions.getItemsRequest(filter.toJS()))
    yield put(NotificationActions.showNotification('Delete product success'))
  } catch (error) {
    yield put({
      type: ProductTypes.DELETE_ITEM_FAILURE,
    })
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}
// Get item Detail and set to form item to edit product
function* getItemDetailWorker({ id }) {
  try {
    const response = yield call(ProductService.getItem, id)
    if (response.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: ProductTypes.GET_ITEM_SUCCESS,
      item: response.item,
    })
  } catch (error) {
    yield put({
      type: ProductTypes.GET_ITEM_FAILURE,
    })
  }
}
// Create Product worker
function* createItemWorker({ values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    yield call(ProductService.createProduct, values)
    yield put({
      type: ProductTypes.CREATE_ITEM_SUCCESS,
    })
    yield put(NotificationActions.showNotification('Create Prouct Success'))
    yield put(LoadingActions.hideLoadingAction())
    yield put(push('/product'))
  } catch (error) {
    yield put({
      type: ProductTypes.CREATE_ITEM_FAILURE,
    })
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}
// Edit Product worker
function* editItemWorker({ id, values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    const response = yield call(ProductService.editProduct, id, values)
    console.log(response)
    yield put({
      type: ProductTypes.EDIT_ITEM_SUCCESS,
    })
    yield put(NotificationActions.showNotification('Edit Product success'))
    yield put(LoadingActions.hideLoadingAction())
    yield put(push('/product'))
  } catch (error) {
    yield put({
      type: ProductTypes.EDIT_ITEM_FAILURE,
    })
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}

// Edit Product worker
function* checkItemWorker({ id }) {
  try {
    yield put(LoadingActions.showLoadingItem(id))
    const response = yield call(ProductService.checkDone, id)
    yield put({
      type: ProductTypes.CHECK_ITEM_SUCCESS,
      item: response.item,
    })
    yield put(NotificationActions.showNotification('Check Prouct Success'))
    yield put(LoadingActions.hideLoadingItem(id))
  } catch (error) {
    yield put({
      type: ProductTypes.CHECK_ITEM_FAILURE,
    })
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingItem(id))
  }
}

function* watcher() {
  yield all([
    takeLatest(ProductTypes.GET_ITEMS_REQUEST, getListProductWorker),
    takeLatest(ProductTypes.DELETE_ITEM_REQUEST, deleteItemWorker),
    takeLatest(ProductTypes.CREATE_ITEM_REQUEST, createItemWorker),
    takeLatest(ProductTypes.EDIT_ITEM_REQUEST, editItemWorker),
    takeLatest(ProductTypes.GET_ITEM_REQUEST, getItemDetailWorker),
    takeEvery(ProductTypes.CHECK_ITEM_REQUEST, checkItemWorker),
  ])
}
sagaRegistry.register(MODULE_NAME, watcher)

export default watcher
