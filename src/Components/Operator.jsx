import React from 'react'

const Operator = ({name,age,panCard,price}) => {
  return (
    <div>
      <h1>Ternary Operator</h1>
      <h2>Name : {name}</h2>
      <h3>{age>18 ? <h2>you con drive</h2> : <h2>you can not drive</h2>}</h3>
      <h4>PanCard : {panCard}</h4>
      <h3>{panCard ? <h2>you con open account</h2> : " "}</h3>
      <h3>{panCard && <p>You can open acoount in our bank</p>}</h3>
      <div>{(price==100)&& <h2>you can purchase iphone</h2>}</div>
    </div>
  )
}

export default Operator
