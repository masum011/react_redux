import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {purchase_book,sell_book} from './BookAction'

function Component1() {
   
    const  numberof= useSelector(state => state.numberOfBook)
    const dispatch = useDispatch()
    

    console.log(numberof);

  return (
    <>
        <h1>Number of Book {numberof}</h1>
        <button onClick={()=> dispatch(purchase_book())}>Update number Of Book</button>
        <button onClick={()=>dispatch(sell_book())}>increment numbe rof book</button>
    </>
  )
}

export default Component1