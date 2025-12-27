
import './App.css'

function App() {

let items=["Dal","chawal","Roti","Chiken","Egg","Pannir"]
  return (
    <>
     <h1>Helthey food</h1>
     <ul className="list-group">
      {items.map(item=><li className='list-group-item'>{item}</li>)}
      
     </ul>
    </>
  )
}

export default App
