
export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const todoList = [
    { id: 1, title:"Complete assigment"},
    { id: 2, title: "Buy coffee supplies"},
    { id: 3, title: "Water plants"},
  ]
  return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todoList.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
  )
}

export default App