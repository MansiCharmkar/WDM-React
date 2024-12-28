import { useState } from "react";

const Counter = () => {
  // let counter = 10;

  const [counter, setCounter] = useState(0);

  const [product, setproduct] = useState("sweets");
  const [Arr, setArr] = useState(["apple", "banana", "graphs", "orange"]);
  const [obj, setobj] = useState({ name: "Divya", age: "20", city: "reva" });

  const increaseBy1 = () => {
    // counter++;
    setCounter(counter + 1);
    console.log("counter", counter);
  };
  const decreaseBy1 = () => {
    // counter--;
    setCounter(counter - 1);
    console.log("counter", counter);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseBy1}>Increase</button>
      <button onClick={decreaseBy1}>Decrease</button>
      <div>{obj.name}</div>
      <div>{obj.age}</div>
      <div>{obj.city}</div>
      <div>{Arr}</div>
      <div>{product}</div>
    </div>
  );
};

export default Counter;
