export default function injectSaga(store, { key, saga }) {
  if (store.injectedSagas.includes(key)) return
  store.injectedSagas.push(key)
  store.runSaga(saga)
}
