import "./App.css";
import ComAA from "./components/innerComponents/ComAA";
import ComA from "./components/ComA";
function App() {
  // const {value}=useSelector(state=>state.counter)

  return (
      <div className="App">
        <h1>hello redux</h1>
        <ComAA/>
        <ComA/>

      </div>
  );
}

export default App;
