import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([])
  const [value,setValue]=useState("")
  const inputRef=useRef(null);



  useEffect(()=>{
    const initialTodos=[
      {
        task:"Drink Coffee",
        completed:true
      },
      {
        task:"Go to Gym",
        completed:false
      }
    ]
    setTodos((todo)=>initialTodos)
  },[])


  const addTodo=useCallback((value)=>{
    let add ={
      task:value,
      completed:false
    }
    setTodos((todos=>[...todos,add]))
    setValue("")
    inputRef.current.focus();
  },[]);

  return (
    <>
      <div>
        <h1>Todo Application</h1>
        <label>
          Enter a Task:
          <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} ref={inputRef}/>
        </label>
        <button onClick={()=>addTodo(value)}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          
            {console.log(todos)}
            {
              todos.map((todo,index)=>(
                
                <tr key={index}>
                
                  <td>{todo.task}</td>
                  <td>
                  <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => {
            setTodos(todos.map((t, i) => i === index ? { ...t, completed: !t.completed } : t));
          }}
        />
                  {todo.completed ? "Completed":"Not Completed"}
                  </td>
                  
                </tr>
              ))
            }
            
         
        </tbody>
      </table>
      
    </>
  )
}

export default App
