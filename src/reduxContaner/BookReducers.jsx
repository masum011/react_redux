// import { buy_book } from "./BookTypes"
// import { sell_book } from "./BookAction"

import { useState } from "react";

const initionalstate = {
  numberOfBook: 20,
  numberofPen: 0,
  update_name:"masum"
};
const BookReducers = (state = initionalstate, action) => {
    // const [name,setName]=useState("masum reza");

  switch (action.type) {
    case "BUY_BOOK":
      return { ...state, numberOfBook: state.numberOfBook - 1 };

    case "SELL_BOOK":
      return { ...state, numberOfBook: state.numberOfBook + 1 };

    case "SELL_BY_TWO":
      return { ...state, numberofPen: state.numberofPen + 2 };
    case "UPDATE_NAME":    
      return {...state, update_name:action.payload };
    default:
      return state;
  }
};
export default BookReducers;
