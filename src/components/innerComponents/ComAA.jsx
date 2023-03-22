import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increbytwo } from '../../features/counter/counterSlice';

function ComAA() {
 const {value1}= useSelector(state=>state.counter)
 const dispatch=useDispatch();
  return (
    <div>
        <h1>innner componets comA {value1}</h1>
        <button onClick={()=>dispatch(increbytwo())}>increbytwo</button>
    </div>
  )
}

export default ComAA