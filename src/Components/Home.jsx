import React from 'react'
import Person from './Person'
import Test from './Components/Test'
import Superman from './superman'
import Product from './Components/Product'
import Person2 from './Components/Person2'
import Operator from './Components/Operator'
import pizzaData from "../src/data/pizza.json"
import Laptop from './Components/Laptop'
import Event from './Components/Event'
import Counter from './Components/Counter'
import ShowProduct from './Components/ShowProduct'
import FilterProduct from './Components/FilterProduct'

const Home = () => {
    // console.log(pizzaData)
  return (
    <div>
          <>
    <div>
      {/* <Person/> */}
      {/* <h1>App.jsx is a entry point</h1> */}
      {/* <Superman/> */}
      {/* <Test/> */}
      {/* <Product/> */}
      {/* <Product title="Galaxy S24 Pro" brand = "Samsung" Price={130000} Ram = "8GB" Rom = "128GB" Camra ="200 mp"/>
      <Product title="iphone" brand = "Apple" Price={112000} fingerPrint = "Yes"/>
      <Product title="moto 64" brand = "Samsung" Price={230000}/>
      <Product title="Vivo 1906" brand = "Vivo" Price={30000}/>
      <Product title="iphone Max Pro" brand = "Apple" Price={730000}/> */}
      </div>

    <div>
    {/* <Person2 name = "Gauri" age = "20" salary={200000} depart="IT"/>
    <Person2 name = "Ganesh" age = "30" salary={20000} depart="Machanical"/>
    <Person2 name = "Gopal" age = "20" salary={30000} depart="Electrical"/>
    <Person2 name = "Ghansyam" age = "20" salary={200000} depart="Management" ram="Ram"/> */}
    </div>

      <div>
        {/* <Operator name = "Vinod" age = {16} panCard = {true} price={100}/> */}
      </div>

      <div>
      {/* <Laptop brandName="hp" model="yebook" price={150000}/>
      <Laptop brandName="lenovo" model="yoga" price={230000}/>
      <Laptop brandName="dell" model="inspiron" price={45000}/> */}
      </div>

        <div>
          {/* <Event/> */}
        </div>

        <div>
          {/* <Counter/> */}
        </div>

        <div>
          {/* <ShowProduct/> */}
        </div>

        <div>
          <FilterProduct/>
        </div>
    
    </>
    </div>
  )
}

export default Home
