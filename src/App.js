import React from 'react';
import Todo from './Todo';
import TodoImg from './todo.jpg'

function App() {
  return (
    <div className="App container-fluid">
      <h1>ToDo's App</h1>
      <img src={TodoImg} alt="ToDo"/>
      <Todo/>
    </div>
  );
}

export default App;
