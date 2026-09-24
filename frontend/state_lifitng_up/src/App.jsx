import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import UserCard from './components/UserCard'

function App() {
  const [toggle, setToggle] = useState(false)
    const [users, setUsers] = useState([])
    console.log(users);

  
  return (
    <div>
      {toggle? (users.map((e,i)=><UserCard key={i} user={e}/>)): (<Register setToggle={setToggle} setUsers={setUsers}/>)}
    </div>
  )
}

export default App
