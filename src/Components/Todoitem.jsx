import React, { useState } from 'react'

const Todoitem = (props) => {
  
  const actArray=props.actArray
  const setActArray=props.setActArray

  const [newActivity,setNewActivity]=useState("")

function handleActivity(e){
setNewActivity(e.target.value)
}


function addActivity(){
  setActArray([...actArray,{id:actArray.length+1,activity:newActivity}])
  setNewActivity("")
}

  return (
    <>
       <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Manage Activities</h1>
            <div >
            <input value={newActivity} onChange={handleActivity} type='text' className='border border-black bg-transparent p-1 'placeholder='Next Activity?'/>
            <button onClick={addActivity} className='bg-black text-white p-1 border border-black'>Add</button>
            </div>
            
        </div>
    </>
  )
}

export default Todoitem