import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { name: "User 1", age: 20, gender: "Male" },
    { name: "User 2", age: 29, gender: "Male" },
    { name: "User 3", age: 17, gender: "Female" },
    { name: "User 4", age: 19, gender: "Female" },
    { name: "User 5", age: 15, gender: "Male" },
    { name: "User 6", age: 23, gender: "Male" },
    { name: "User 7", age: 45, gender: "Male"}
  ])
  const [current,setCurrent]=useState("")

  const [originalUser] = useState([...users])

  const setFilter=(gender)=>{
    if (current===gender){
      setUsers(originalUser)
      setCurrent("")
  } 
    else{
      setUsers(
        originalUser.filter((user)=>user.gender===gender)
      )
      setCurrent(gender)
    }




  }

  return (
    <>
    <h1>User List</h1>
      
 
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user,index)=>(
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
          </tr>
        ))}

      </tbody>
    </table>
    <button onClick={()=>setFilter("Male")}>
      {current==="Male"?"Clear Filter":"Filter Male"}

    </button>
    <button onClick={()=>setFilter("Female")}>
      {current==="Female"?"Clear Filter":"Filter Female"}

    </button>
      
    </>
  )
}

export default App
