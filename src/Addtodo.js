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
            <div className="data">
                <form onSubmit={this.handleSubmit}>
                    <input  className="datainput" type="text" onChange={this.handleChange} value={this.state.name}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Addtodo;