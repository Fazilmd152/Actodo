import React from 'react'
import Card from "../Components/Card";
import Header from "../Components/Header";
import ToDoContainer from "../Components/ToDoContainer"
import { useLocation } from 'react-router-dom'

const Landing = () => {
const data=useLocation()


  return (
    <div className="bg-black p-16">
      <div className="bg-[#efefef] p-10 border rounded-md">
        <Header name={data.state.username} />
        <div className='flex justify-between gap-7 my-5 flex-wrap'>
          <Card bg={"#8272da"} title={"23"} subtitle={"chennai"} />
          <Card bg={"#fd6663"} title={"December"} subtitle={"13:25:02"} />
          <Card bg={"#fca201"} title={"Built Using"} subtitle={"React"} />
        </div>
         <ToDoContainer/>



      </div>
    </div>
  )
}

export default Landing