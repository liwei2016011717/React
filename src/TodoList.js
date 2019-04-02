import React, { Component } from 'react';
import store from './store';
class TodoList extends Component {
    constructor(){
        super();
        // this.state={
        //     list:[1,2,3,4]
        // }
         this.state={
           list:store.getState().todo.list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            if(e.target.value!==''){
                store.dispatch({
                    type:'add_item',
                    value:e.target.value
                })
            }
            e.target.value=''  
        }      
    }

    handleDel=(index)=>{
        store.dispatch({
            type:'del_item',
            index:index
        })
    }
    render() {
        return (
            <div>
                 <input type="text" onKeyDown={this.handleAdd}/><br/>
                 <ul>
                     {
                         this.state.list.map(
                            (item,index)=>(
                                <li key={index}>{item}&nbsp;&nbsp;<button onClick={this.handleDel.bind(this,index)}>删除</button></li>
                            )
                        )
                     }
                 </ul>
            </div>
        );
    }
}

export default TodoList;
