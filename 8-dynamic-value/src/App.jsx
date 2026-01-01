import myImage from "./assets/WhatsApp.jpg";
import "./App.css";
// import React from "react";
import { Fragment } from "react";

export const App = () => {
  return (

    // Fragments allow us to group a list of children without adding extra nodes to the DOM
    // <> </>  short syntax for <Fragment> </Fragment>
    // useful when you want to return multiple elements from a component without adding extra nodes to the DOM
    // especially when rendering lists of components
    // Example:
    // [<Component key={1}/>,<Component key={2}/>, ]

    <Fragment>
      <h1>Hello, React Components!</h1>
      <Component />
      <Component />

      <Component />
      <Component />
    </Fragment>
  );
};

const Component = () => {

  let name = "Dipu Kumar Gupta";
  let age = 22;
  let gender = "Male";
  let address = "Motihari Bihar india";
  return (
    <div className="component">
      <img src={myImage} alt="profile" width="300" />
      <h2>Name:{name} </h2>
      <h4>age:{age} </h4>
      <h4>gender: {gender}</h4>
      <h4>address:{address} </h4>
    </div>
  );
};
