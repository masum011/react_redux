// import { buy_book } from "./BookTypes";

export const purchase_book = () => {
  return {
    type: 'BUY_BOOK'
  };
};
export const sell_book = () => {
  return {
    type: 'SELL_BOOK'
  };
};
export const sell_bookBYTwo = () => {
  return {
    type: 'SELL_BY_TWO'
  };
};

export const upadteName=(payload)=>{
    console.log(payload,"huhgjjh")
    return{
        type:"UPDATE_NAME",
        payload

    }
}

