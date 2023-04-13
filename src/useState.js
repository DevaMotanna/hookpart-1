import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0); // this useState wiil return both values in arrays
  //   console.log(count);   // --> here count is default value means which you passed (10)
  //   console.log(setCount);  // ---> this is function if you want change default value we can change using this

  const incrementCount = () => {
    // setCount(count + 1);   ---> it will increse +1
    // setCount((prevCount) => {
    //   return prevCount + 1;      -----> it will incress 2 numbers based on previes number
    // });
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrementCount = () => {
    // setCount (count - 1);   --> only 1 will decreess
    setCount((prevCount) => prevCount - 1);  // it will decress 2 at a time 
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Index;
