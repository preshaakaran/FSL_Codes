import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user,setUser]=useState(null)

  const clearInfo=()=>{
    setUser(null)
  }

  const getInfo=async()=>{
    try {
      const res = await fetch('http://localhost:5000/',{method:"GET"});
      const data = await res.json()
      console.log(data)
      setUser(data)
      
    } catch (error) {
      console.log(error)
    }
  }

 
  

  return (
    <>
    <div>
      <h1>Click to get Product Info:</h1>
      {
        !user ? <button onClick={()=>getInfo()}>Get Info</button>:<button onClick={()=>clearInfo()}>Clear Info</button>
      }
      <div>
      {
        user&&(
          <div>
      <h2>User Data Table</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((u, i) => (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.price}</td>
                <td>{u.value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
        )
      }
    </div>

    </div>
    
      
    </>
  )
}

export default App
