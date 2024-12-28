import React from 'react'
import Superman from './superman'
const Person = () => {
      // const name = "john";
  // const age = 20;
  // const city = "bhopal";
  const person={
    name : "subh",
    age : 20,
    gmail : "subh@gmail.com",
    pincode : 485001,
  }

  const product={
    title : "iphone",
    model : "iphone-15",
    price : 65000,
  }
  return (
    <>
     <div>
      {/* <h1>web dev technology</h1>
      <h3>we are learning react</h3>
      <h1>4+3</h1>
      <h1>sum = {23+43}</h1>
      <h1>mul = {6*35} </h1>
      <h3>city : {city}</h3>
      <h2>name : {name}</h2>
      <h2>age : {age}</h2> */}
      <h1>====== person data ==========</h1>
      <h3>Name : {person.name}</h3>
      <h3>Age : {person.age}</h3>
      <h3>Gmail : {person.gmail}</h3>
      <h3>Pincode : {person.pincode}</h3>

    </div>

    <h1>====== product data ==========</h1>
    <div>
      <h3>Title : {product.title}</h3>
      <h3>Model : {product.model}</h3>
      <h3>Price : {product.price}</h3>
    </div> 
    <Superman/>
    </>
   
  )
}

export default Person
