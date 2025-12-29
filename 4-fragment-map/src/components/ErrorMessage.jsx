import React from "react";

const ErrorMessage = ({ food }) => {
  let emptyMessage = food.length == 0 ? <h3>I am Still hungry</h3> : null;
  return <div>{emptyMessage}</div>;
};

export default ErrorMessage;
