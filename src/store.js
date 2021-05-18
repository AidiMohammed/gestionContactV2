import {createStore,compose,applyMiddleware} from 'redux';
import rootRedux from './reducers'
import thunk from 'redux-thunk'

const initState = {}

const store = createStore(rootRedux,
                        initState,
                        compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;