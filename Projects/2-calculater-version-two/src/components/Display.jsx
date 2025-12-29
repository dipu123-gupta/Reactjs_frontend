import React from 'react'

const Display = ({calVal}) => {
  return (
    <div>
        <input type="text" className='input' value={calVal} readOnly/>
    </div>
  )
}

export default Display