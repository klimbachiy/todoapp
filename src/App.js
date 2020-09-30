import React from 'react';
import Todo from './Todo';
import TodoImg from './todo.jpg'

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <img className="imgcls" src={TodoImg} alt="ToDo"/>
      <Todo/>
    </div>
  );
}

export default App;
