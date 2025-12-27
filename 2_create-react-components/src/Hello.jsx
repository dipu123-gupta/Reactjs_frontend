import React from 'react'

const Hello = () => {

    const name="dipu kumar"
    const fullNmae=()=>{
    return "Dipu kumar gupta"
    }
  return (
    <div>
        <h1>This component is dynamic component</h1>
        <h1>This is the feature speaking: {name}</h1>
        <h1>My full name: {fullNmae()}</h1>
    </div>
  )
}

export default Hello