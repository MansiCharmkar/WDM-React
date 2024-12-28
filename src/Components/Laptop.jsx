import React from 'react'
import './Laptop.css'

const Laptop = ({brandName, model,price}) => {
    // internal css
    const internalStyle = {
        backgroundColor:"yellow",
        color:"green",
        padding:"10px",
        margin:"1rem",
        border:"5px solid blue",
        borderRadius:"10px"
    }
  return (
    // inline css
    <div 
    // style={{backgroundColor:"blue",padding:"10px", margin:"1rem",border:"3px solid yellow", borderRadius:"10px"}}
    // style={internalStyle}

    className='div'
    >
        
      <h3>BrandName : {brandName}</h3>
      <h3>Model : {model}</h3>
      <h3>Price : {price}</h3>
    </div>
  )
}

export default Laptop
