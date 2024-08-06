import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {

const users=props.users

const navigate=useNavigate()

const [username,setusername]=useState()
const [password,setpassword]=useState()
const [regUser,setRegUser]=useState(true)

function handleUsername(e){
setusername(e.target.value)

}
function handlePassword(e){
setpassword(e.target.value)
}

function checkUser(){

var userFound=false

    users.forEach((item)=>{
        if(item.username == username && item.password ==password)
        {
            console.log("LOgin Success");
            userFound=true
            navigate("/landing",{state:{username:username}})
        }
        })

    if(userFound===false){
        console.log(" Login failed")
        setRegUser(false)
    }
}


  return (
    <div className='bg-black p-10'>
    <div className='bg-[#efefef] p-10 border rounded-md'>
        <h1 className='text-3xl'>Hey hi &#128075;</h1>
        {regUser? <p>I'll help you manage your activities afte you login :)</p>:<p className='text-red-700'>Please sign up before you login !</p>}
       
        <div className='flex flex-col gap-2 my-2'>
            <input type='text' placeholder='Username' className='w-52 p-1 bg-transparent border rounded-md border-black'  onChange={handleUsername}></input>

            <input type='text' placeholder='Password' className='w-52 p-1 bg-transparent border rounded-md border-black'onChange={handlePassword}></input>

           
            <button className='bg-[#8272da] w-24 p-1 rounded-md' onClick={checkUser}>Login</button>

            <p >Don't have an account? <Link className='underline' to={'/signup'} >Sign up</Link> </p>
        </div>
    </div>
</div>
  )
}

export default Login