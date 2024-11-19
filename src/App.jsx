import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App(){
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm/>{/* Add the form component */}
      <TodoList/>{/* Add the TodoList component */}
    </div>
  );
}
export default App;