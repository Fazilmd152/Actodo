import React from 'react'



const Todolist = (props) => {
    const actArray = props.actArray
    const setActArray = props.setActArray

    function handleDelete(deleteId) {
        var tempArr = actArray.filter((i) => {
            if (i.id === deleteId) {
                return false
            }
            else {
                return true
            }
        })
        setActArray(tempArr)
    }


    return (
        <div className='flex justify-between align-middle'>
            <p>{props.index+1}. {props.item}</p>
            <button className='text-red-400' onClick={() => { handleDelete(props.id) }} >Delete</button>
        </div>
    )
}

export default Todolist