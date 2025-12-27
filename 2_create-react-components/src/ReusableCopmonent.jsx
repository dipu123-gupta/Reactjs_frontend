import React from 'react'

const ReusableCopmonent = () => {
    const number=Math.random()*100;
  return (
    <div>
        <h1 style={{'backgroundColor':'#776692'}}>Random Number is:{Math.floor(number)} </h1>
    </div>
  )
}

export default ReusableCopmonent