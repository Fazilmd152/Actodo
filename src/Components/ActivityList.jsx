import React, { useState } from 'react'
import Todolist from './Todolist'


const ActivityList = (props) => {
const actArray=props.actArray
const setActArray=props.setActArray


  return (
    <>
        <div className='bg-[#bdb4ea] border rounded-md p-2 flex-grow'>
            <h1 className='text-2xl font-medium'>To do activity</h1>
            {actArray.length==0?<p>You haven't add any activity yet</p>:""}
            {
                actArray.map((item,index)=>{
                    return <Todolist id={item.id} actArray={actArray} setActArray={setActArray} item={item.activity}index={index}/>
                })
            }
        </div>
    </>
  )
}

export default ActivityList



{/* <Todolist id={item.id} actArray={actArray} setActArray={setActArray} item={item.activity}index={index}/> */}