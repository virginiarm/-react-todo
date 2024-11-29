import React, { useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function App(){
  const[todoList,setTodoList]=useState(
    [{ id: 1, title:"Complete assigment"},
    { id: 2, title: "Buy coffee supplies"},
    { id: 3, title: "Water plants"},
  ]);
  function addTodo(newTodo){
    setTodoList([...todoList,newTodo]);
  }
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>

    </div>
  );
}
export default App;