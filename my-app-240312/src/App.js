import "./App.css";
import MainHeader from "./01/MainHeader";
import SayHello from "./01/Hello";
import MyClock from "./01/MyClock";
import EvenOdd from "./01/EvenOdd";

function App() {
  return (
    <>
    <div className="App">
      <MyClock />
      <SayHello />
      <EvenOdd />
    </div>
    </>
  );
}

export default App;
// 1. export must be exsistde cause to use module in other file
// 2. return type reference is div>header>sequence
