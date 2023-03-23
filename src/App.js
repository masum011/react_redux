import "./App.css";
import { Provider } from "react-redux";
import Component1 from "./reduxContaner/Component1";
import Component2 from "./reduxContaner/Component2";
import Home from "./reduxContaner/reduxinsidecomponents/Home";
import About from "./reduxContaner/reduxinsidecomponents/About";
import store from "./reduxContaner/Store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hello redux</h1>
        <Component1/>
        <Component2/>
        <Home/>
        <About/>
      </div>
    </Provider>
  );
}

export default App;
