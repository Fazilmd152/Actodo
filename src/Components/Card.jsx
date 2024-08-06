import React from 'react'

const Card = (props) => {
    return (
        <>
            <div style={{backgroundColor:props.bg}} className='text-center px-10 py-5  border rounded-md grow'>
                <h1 className='font-medium text-2xl'>{props.title}</h1>
                <p >{props.subtitle}</p>
            </div>
           
     </>
            
       

    )
}

export default Card