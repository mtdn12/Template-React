This Module use to dynamic inject reducer to store
When you register a new reducer to inject with reducerRegistry this will check if this reducer is run or not base on list reducers save in reducerRegistry
If already run then nothing happen
If still not run then this will run the emitChange funtion
Basically emitChange function is the function you register when you create store and it is often a replaceReducer supply by redux store to change entire reducer tree
