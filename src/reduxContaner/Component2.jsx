import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sell_bookBYTwo } from './BookAction';

function Component2() {
    // const numberofpen=useSelector()
    const numBook=useSelector(state=>state.numberOfBook+state.numberofPen);
    const dispat=useDispatch();
    
  return (
    <div>
        <h1>Component2 {numBook}</h1>
        <button onClick={()=>dispat(sell_bookBYTwo())}>decreByTwo</button>
    </div>
  )
}

export default Component2