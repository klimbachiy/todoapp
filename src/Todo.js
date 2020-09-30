import React from 'react';
import './App.css'
import Todoui from './Todoui';
import Addtodo from './Addtodo';
import uuid from 'react-native-uuid';

class Todo extends React.Component{
    state={
        todos:[{id:1,name:"make bed"},
                {id:2,name:"brush ur teeth"}]
    }
    deleteTodo=(id)=>{
        //console.log(id);
        let todos = this.state.todos.filter(todo=>{
            return todo.id!==id
        })
        this.setState({
            todos:todos
        });
    }
    addTodo=(todo)=>{
        todo.id=uuid.v4();
        let todos=[...this.state.todos,todo];
        this.setState({
            todos:todos
        })
    }
    render(){
        return(
            <div>
                <Addtodo addTodo={this.addTodo}/>  
                <br/>
                <Todoui todos={this.state.todos} deleteTodo={this.deleteTodo}/>  
            </div>
        )
    }
}

export default Todo;