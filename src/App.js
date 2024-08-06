import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react'
import "./index.css"
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App(){
  const [users,setUsers]=useState([
    {
        username:"fazil",
        password:123
    }
])

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
      <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
      <Route path='/landing' element={<Landing />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
