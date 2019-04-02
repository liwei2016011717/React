import {combineReducers} from 'redux';
let counter=(state=12,action)=>{
    switch(action.type){
        case 'ADD':
            // return state+1;
            return state+action.value;
        case 'DEC':
            return state-action.value;
        case 'Inc':
            return state+1;
        default:
            return state;
    }
}

let initValue={
    // a:1,
    list:[1,2,3],
}
let todo= (state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState=JSON.parse(JSON.stringify(state));//深拷贝
            //或者这种方法let obj=Object.assign({},state,{a:100});//使用 Object.assign() 新建了一个副本   创建对象，返回目标对象
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            state.list.splice(action.index,1);
        default:
            return state;
    }
}

export default combineReducers({
    counter,todo
})