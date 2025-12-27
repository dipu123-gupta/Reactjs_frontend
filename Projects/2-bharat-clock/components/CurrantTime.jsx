import React from 'react'

export const CurrantTime = () => {
    let time=new Date()
  return (
    <p className='lead'>This is the currant time in india:{time.toLocaleDateString()}, {time.toLocaleTimeString()}</p>
  )
}
