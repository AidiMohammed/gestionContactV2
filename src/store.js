import {createStore} from 'redux';
import rootRedux from './reducers'

const initState = {}

const store = createStore(rootRedux,initState)

export default store;