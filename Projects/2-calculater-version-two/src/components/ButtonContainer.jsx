 import React from "react";
// import ButtonContainer from './ButtonContainer';

const ButtonContainer = ({onButtonClick}) => {
  const input = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="ButtonContainer">
      {input.map((button) => (
        <button className="button" onClick={()=>onButtonClick(button)}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
