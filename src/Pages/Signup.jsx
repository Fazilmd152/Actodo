import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signup = (props) => {

const navigate=useNavigate()
const users=props.users
const setUsers=props.setUsers

const [nUsers,setNusers]=useState()
const [nPword,setNpword]=useState()
const [conPword,setConpword]=useState()
const [checkPassword,setCheckpassword]=useState(true)

function handleNusers(e){
    setNusers(e.target.value)
}

function handleNpword(e){
    setNpword(e.target.value)
}

function handleConpword(e){
    setConpword(e.target.value)
}


function addNewusers(){
    if(nPword==conPword){
        setUsers([...users,{username:nUsers,password:nPword}])
        navigate("/")
        setCheckpassword(true)
    }
    else{
        setCheckpassword(false)
    }

       

}



    return (
        <div className='bg-black p-10'>
            <div className='bg-[#efefef] p-10 border rounded-md'>
                <h1 className='text-3xl'>Hey hi &#128075;</h1>
                <p>Sign Up here :)</p>
                <div className='flex flex-col gap-2 my-2'>
                    <input value={nUsers} onChange={handleNusers} type='text' placeholder='Username' className='w-52 p-1 bg-transparent border rounded-md border-black'></input>

                    <input value={nPword} onChange={handleNpword} type='text' placeholder='Password' className='w-52 p-1 bg-transparent border rounded-md border-black'></input>

                    <input value={conPword} onChange={handleConpword} type='text' placeholder='Confirm Password' className='w-52 p-1 bg-transparent border rounded-md border-black'></input>

                    <button className='bg-[#fca201] w-24 p-1 rounded-md' onClick={addNewusers}>Sign UP</button>
                   {checkPassword?"":<p className='text-red-700'>Password not matching! enter correct password.</p>}
                    <p>Already have an account? <Link className='underline' to={'/'}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup