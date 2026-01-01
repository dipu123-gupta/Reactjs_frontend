import myImage from "./assets/WhatsApp.jpg";
import './App.css';


export const App = () => {
  return (
    <div>
      <h1>Hello, React Components!</h1>
      <Component />
      <Component />

      <Component />
      <Component />
      
    </div>
  );
};

const Component = () => {
  return (
    <div className="component">
      <img src={myImage} alt="profile" width="300" />
      <h2>Name: Dipu Kumar Gupta</h2>
      <h4>age: 22</h4>
      <h4>gender: Male</h4>
      <h4>address: Motihari Bihar india</h4>

    </div>
  );
};
