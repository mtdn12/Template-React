export class SagaRegistry {
  constructor() {
    this._emitChange = null
    this._sagas = {}
  }
  register(name, saga) {
    if (this._sagas[name]) return
    this._sagas = { ...this._sagas, [name]: saga }
    if (this._emitChange) {
      this._emitChange(saga)
    }
  }
  setChangeListener(listener) {
    this._emitChange = listener
  }
}
const sagaRegistry = new SagaRegistry()
export default sagaRegistry
