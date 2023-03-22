import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { upadteName } from '../BookAction';

function Home() {
    const pen=useSelector(state=>state.update_name);
    const dispatch=useDispatch()
  return (
    <>
    <h1>home {pen}</h1>
    <button onClick={()=>dispatch(upadteName("harsh"))}>homeBTN</button>
    </>
  )
}

export default Home