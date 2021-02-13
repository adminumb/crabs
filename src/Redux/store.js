import {createStore, combineReducers} from 'redux'
import resultsReducer from "./resultsReducer";



const rootReducer = combineReducers({

    resultReducer:resultsReducer

})


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



window.__store__ = store;

export default store