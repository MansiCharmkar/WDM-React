import React from 'react'

// useing props
// const Product = (props) => {
    // without props - reusible property
    const Product = ({title,brand,price,Ram,Rom,Camra,fingerPrint}) => {
    // const object = {
    //     title : "Galaxy Max Pro",
    //     brand : "Samsung",
    //     price : 150000,
    }
  return (
    <div>
      {/* <h3>Title = {props.title}</h3>
      <h3>Brand = {props.brand}</h3>
      <h3>Price = {props.price}</h3>
      <h3>Ram = {props.Ram}</h3>
      <h3>Rom = {props.Rom}</h3>
      <h3>Camra = {props.Camra}</h3>
      <h3>fingerPrint = {props.fingerPrint}</h3> */}

      <h3>Title = {title}</h3>
      <h3>Brand = {brand}</h3>
      <h3>Price = {price}</h3>
      <h3>Ram = {Ram}</h3>
      <h3>Rom = {Rom}</h3>
      <h3>Camra = {Camra}</h3>
      <h3>fingerPrint = {fingerPrint}</h3>
    </div>
  )
}

export default Product
