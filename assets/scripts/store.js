var redux = require('redux');
var createStore = redux.createStore;
var reducers = require('./reducers');
/**
 * create a store using the createStore method, 
 * telling it to use the repositoryReducer to  
 * handle any actions which are dispatched
 */
var store = createStore(reducers.gameReducer);

module.exports = store;