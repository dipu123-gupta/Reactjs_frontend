import React from 'react'

const InputField = ({handalOnKeyDown}) => {
   
  return (
    <input type="text" placeholder='Enter Food Item Here' className='foodItem' onKeyDown={handalOnKeyDown} />
  )
}

export default InputField