import './App.css'
// impoting component
import Component from './Component'
import Hello from './Hello'
import { Exporying, Name_Exporting } from './Name_Exporting'
import ReusableCopmonent from './ReusableCopmonent'

function App() {
  

  return (
    <>
    <h1>this is react course</h1>
      <Component/>
      <hr />
      <Name_Exporting/>
      <hr />
      <Exporying/>
      <hr />
      <Hello/>
      <hr />
      <ReusableCopmonent/>
      <ReusableCopmonent/>
      <ReusableCopmonent/>
      <ReusableCopmonent/>


    </>
  )
}
// default exporting component
export default App
