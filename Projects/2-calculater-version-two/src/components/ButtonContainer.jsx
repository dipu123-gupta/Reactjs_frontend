import React from "react";
// import ButtonContainer from './ButtonContainer';

const ButtonContainer = () => {
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
        <button className="button">{button}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
