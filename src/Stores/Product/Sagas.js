import { put, call, takeLatest, select, all } from 'redux-saga/effects'
import { ProductActions, ProductTypes } from 'src/Stores/Product/Actions'
import { getFilter } from './Selectors'
import { NotificationActions } from 'src/Stores/Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import {
  getListProduct,
  deleteProduct,
  createProduct,
  editProduct,
  getItem,
} from '../../Services/ProductService'
import { LoadingActions } from '../Loading/Actions'
import { push } from 'connected-react-router'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'

function* getListProductWorker({ filter }) {
  try {
    yield put(LoadingActions.showLoadingList())
    const response = yield call(getListProduct, filter)
    // console.log(response)
    yield put(LoadingActions.hideLoadingList())
    yield put({
      type: ProductTypes.GET_ITEMS_SUCCESS,
      items: response.items,
      totalCount: response.totalCount,
      totalPages: response.totalPages,
    })
  } catch (error) {
    // console.log(error)
    yield put({
      type: ProductTypes.GET_ITEMS_FAILURE,
    })
    yield put(LoadingActions.hideLoadingList())
  }
}

function* deleteItemWorker({ id }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    yield call(deleteProduct, id)
    yield put({
      type: ProductTypes.DELETE_ITEM_SUCCESS,
    })
    yield put(LoadingActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    const filter = yield select(getFilter)
    yield put(ProductActions.getItemsRequest(filter.toJS()))
  } catch (error) {
    yield put({
      type: ProductTypes.DELETE_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification(
        'Delete product',
        error.message,
        'red'
      )
    )
    yield put(LoadingActions.hideLoadingAction())
  }
}
// Get item Detail and set to form item to edit product
function* getItemDetailWorker({ id }) {
  try {
    const response = yield call(getItem, id)
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
    const response = yield call(createProduct, values)
    console.log(response)
    yield put({
      type: ProductTypes.CREATE_ITEM_SUCCESS,
    })
    yield put(
      NotificationActions.showNotification(
        'Create Product',
        'Create Prouct Success',
        'blue'
      )
    )
    yield put(LoadingActions.hideLoadingAction())
    yield put(push('/product'))
  } catch (error) {
    yield put({
      type: ProductTypes.CREATE_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification(
        'Create Product',
        error.message,
        'red'
      )
    )
    yield put(LoadingActions.hideLoadingAction())
  }
}
// Edit Product worker
function* editItemWorker({ id, values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    const response = yield call(editProduct, id, values)
    console.log(response)
    yield put({
      type: ProductTypes.EDIT_ITEM_SUCCESS,
    })
    yield put(
      NotificationActions.showNotification(
        'Edit Product',
        'Edit Prouct Success',
        'blue'
      )
    )
    yield put(LoadingActions.hideLoadingAction())
    yield put(push('/product'))
  } catch (error) {
    yield put({
      type: ProductTypes.EDIT_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Edit Product', error.message, 'red')
    )
    yield put(LoadingActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(ProductTypes.GET_ITEMS_REQUEST, getListProductWorker),
    takeLatest(ProductTypes.DELETE_ITEM_REQUEST, deleteItemWorker),
    takeLatest(ProductTypes.CREATE_ITEM_REQUEST, createItemWorker),
    takeLatest(ProductTypes.EDIT_ITEM_REQUEST, editItemWorker),
    takeLatest(ProductTypes.GET_ITEM_REQUEST, getItemDetailWorker),
  ])
}
sagaRegistry.register(MODULE_NAME, watcher)

export default watcher
