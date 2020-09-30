import React from 'react';
import './App.css'

class Todoui extends React.Component{
    handleClick=(id)=>{
        this.props.deleteTodo(id);
    }
    render(){
        return(
            <div  className="content">
                <ul>
                {this.props.todos.map(todo=>{
                    return <li key={todo.id}>{todo.name}<button  className="btndelete" onClick={()=>{this.handleClick(todo.id)}}>Delete</button></li>
                })}
                </ul>
            </div>
        )
    }
}

export default Todoui;