import React from "react";

//declaring a function of named todolist
const todoList = [
    { id: 1, title:"Complete assigment"},
    { id: 2, title: "Buy coffee supplies"},
    { id: 3, title: "Water plants"},
  ]
const TodoList= ()=> {
    return (
        //adding the multi-line return statement to the todolist 
        <div>
            <h1>Todo List</h1>
            <ul>
            {todoList.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>

        </div>
    );
};

export default TodoList;
