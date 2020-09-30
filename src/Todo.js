import React from 'react';
import './App.css'
import Todoui from './Todoui';
import Addtodo from './Addtodo';
import uuid from 'react-native-uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

class Todo extends React.Component{
    state={
        todos:[{id:1,name:"make bed"},
                {id:2,name:"brush ur teeth"}]
    }
    notifyError= () => toast.error("Oops invalid TODO!",{position:toast.POSITION.TOP_LEFT});
    notifySuccess = () => toast.success("TODO Added",{position:toast.POSITION.TOP_LEFT});
    notify = () => toast.info("TODO Deleted!",{position: toast.POSITION.TOP_LEFT})
    deleteTodo=(id)=>{
        let todos = this.state.todos.filter(todo=>{
            return todo.id!==id
        })
        this.setState({
            todos:todos
        });
        this.notify();
    }
    addTodo=(todo)=>{
        if(todo.name===""){
            this.notifyError();
        }
        else{
            todo.id=uuid.v4();
            let todos=[...this.state.todos,todo];
            this.setState({
                todos:todos
            })
            this.notifySuccess();
        }
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