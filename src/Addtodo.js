import React from 'react';
import './App.css';

class Addtodo extends React.Component{
    state={
        name:""
    }
    handleChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            name:""
        })
    }
    render(){
        return(
            <div className="md-form">
                <form onSubmit={this.handleSubmit}>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="todo" onChange={this.handleChange} value={this.state.name}/>
                    <div class="input-group-append">
                        <button class="btn btn-success" type="submit">Add</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Addtodo;