import {createStore} from 'redux';
import rootRedux from './reducers'

const initState = {}

const store = createStore(rootRedux,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;