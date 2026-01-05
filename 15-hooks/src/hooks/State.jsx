import React, { useState } from "react";

export const State = () => {
  //   let value = 0;

  //   function ChangeValue() {
  //     value = value + 1;
  //     console.log(value);
  //   }

  // const arr = useState(0)
  // console.log(arr);

  const [arr, setArr] = useState(0);

  function ChangeValue() {
    console.log("parent component rendering");
    setArr(arr + 1);
  }

  return (
    <>
      <div className="center_div">
        <h1 className="value">{arr}</h1>
        <button onClick={ChangeValue}>increment</button>

        <Child value={arr} />
      </div>
    </>
  );
};

// child component
const Child = ({ value }) => {
  console.log("child component rendering");

  return (
    <>
      <h2>This is Child Component {value} </h2>
    </>
  );
};
