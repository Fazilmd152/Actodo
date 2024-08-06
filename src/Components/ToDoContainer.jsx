import React, { useState } from 'react'
import Todoitem from './Todoitem'
import ActivityList from './ActivityList'


const ToDoContainer = () => {

    const[actArray,setActArray]=useState([])


    return (
        <div>
            <div className='flex gap-5 flex-wrap'>
                <Todoitem actArray={actArray} setActArray={setActArray} />
                <ActivityList actArray={actArray} setActArray={setActArray} />
            </div>
        </div>
    )
}

export default ToDoContainer