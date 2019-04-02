import React, { Component } from 'react';
import store from './store';
// console.log(store.getState());
//store是连接action和reducer的一个对象
//action是一个对象，描述state的变化
//Reducer定义了如何响应action描述的state的变化
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10}
        store.dispatch(action);
    }

    handleDec=()=>{
        let action={type:'DEC',value:10}
        store.dispatch(action)
    }

    handleOdd=()=>{
        // console.log(store.getState());
        let action={type:'Inc'}
        if (store.getState().counter % 2!==0) {
            store.dispatch(action)
        }
    }
    handleAsync=()=>{
        let action={type:'Inc'}
        setTimeout(function () {
            store.dispatch(action)
        }, 1000)
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times<br/>
                    <button onClick={this.handleAdd}>+</button><br/>
                    <button onClick={this.handleDec}>-</button><br/>
                    <button onClick={this.handleOdd}>Increment if odd</button>
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
