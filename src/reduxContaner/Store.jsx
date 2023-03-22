import {  createStore } from "redux";
// import logger from "redux-logger";
import BookReducers from "./BookReducers";

// const middleware = applyMiddleware(logger)
const store=createStore(BookReducers);


export default store;