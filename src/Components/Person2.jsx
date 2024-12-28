import React from 'react'

const Person2 = ({name,age,salary,depart,ram}) => {
  return (
    <div>
      <h1>Person 2</h1>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Salary : {salary}</h3>
      <h3>Depart : {depart}</h3>
      <h3>Ram : {ram}</h3>
    </div>
  )
}

export default Person2
