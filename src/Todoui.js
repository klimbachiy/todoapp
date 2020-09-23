import React from 'react';
import './App.css'

class Todoui extends React.Component{
    handleClick=(id)=>{
        //console.log(id);
        this.props.deleteTodo(id);
    }
    render(){
        return(
            <div>
                <ul>
                {this.props.todos.map(todo=>{
                    return <div className="row todo-row" key={todo.id}>
                    <div className="col-8"><li className="todotext-align">{todo.name}</li></div>
                    <div className="col-4"><button className="btn btn-danger" onClick={()=>{this.handleClick(todo.id)}}>Delete</button></div>
                    </div>
                            
                })}
                </ul>
            </div>
        )
    }
}

export default Todoui;