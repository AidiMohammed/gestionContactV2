import {createStore} from "redux";
import rootReducer from './Reducers';

const initState = {};

const store = createStore(rootReducer,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;