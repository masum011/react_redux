import React from 'react'
import { useSelector } from 'react-redux'

function ComA() {
    const {value}=useSelector(state=>state.counter);
  return (
    <div>
        <h1>outercomponents ComA {value}</h1>
    </div>
  )
}

export default ComA