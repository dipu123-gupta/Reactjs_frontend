import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  let onButtonClick = (buttonTexy) => {

    if (buttonTexy == "c") {
      setCalVal("");
    } 
    
    else if (buttonTexy == "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    
    else {
      let newDisplyValue = calVal + buttonTexy;
      setCalVal(newDisplyValue);
    }
    
  };

  return (
    <center className="main-container">
      <Display calVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </center>
  );
}

export default App;
