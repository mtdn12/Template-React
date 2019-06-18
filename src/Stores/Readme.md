Structure of each module in Store
--ModulesName
-- Action.js
-- IntialState.js
-- Reducers.js
-- Sagas.js
-- Selectors.js

- Action.js : Contains all actions to dispatch of a module
  : We use function createActions from reduxsauce library to make actions
  : It will return actionTypes contain all Actions type and actionCreator contain all action creator function
- InitialState.js : Contain all intial state for that module and Module Name
  : Module name use to select data from state and is its own reducer key.
- Reducers.js
  : All reducers function for module. We also register reducer to store's state here.
  So we just need to import reducer file in top a component to use it
- Sagas.js
  All sagas function for module. We also register saga to sagamiddleware run here,
  So we just need to import sagas file in top a component to use it
- Selectors.
  All selector data from store'state goes here
  We select data here to easy resuse if want use this data from another module or easy to processed data here. Can use with 'reselect' library to cache some complex object data to prevent react component re-render
