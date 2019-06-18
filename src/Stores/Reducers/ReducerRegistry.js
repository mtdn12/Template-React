export class ReducerRegistry {
  constructor() {
    this._emitChange = null
    this._reducers = {}
  }
  getReducers() {
    return { ...this._reducers }
  }
  register(name, reducer) {
    // Check if this reducer register or not
    if (this._reducers[name]) return
    // If not register new reducer
    this._reducers = { ...this._reducers, [name]: reducer }
    if (this._emitChange) {
      this._emitChange(this.getReducers())
    }
  }
  setChangeListener(listener) {
    this._emitChange = listener
  }
}
const reducerRegistry = new ReducerRegistry()
export default reducerRegistry
