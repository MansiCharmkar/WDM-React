import React from 'react'

const Event = () => {
    const handleEvent = ()=>{
        alert("You clicked button")
    };
    const sumNum =(a)=>{
        alert(`Sum of two number ${a} + 20 = ${a+20}`)
    };
  return (
    <div>
      <h3>We are learning event</h3>
      <button onClick={handleEvent}>click me!</button>
      <button onClick={()=>{sumNum(10)}}>sumButton</button>
    </div>
  )
}

export default Event
