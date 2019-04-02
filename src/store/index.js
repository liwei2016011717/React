import {createStore} from'redux';
import reducer from'./reducer';
// let store=createStore(reducer);
//reducer后面加的话用于测试
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;