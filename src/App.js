import "./App.css";
import MainHeader from "./01/MainHeader";
import SayHello from "./01/Hello";
import MyClock from "./01/MyClock";
import EvenOdd from "./01/EvenOdd";
import Hellocss from "./01/Hellocss";
import Hellowhite from "./02/HelloWhite";
import HelloYellow from "./02/HellowYellow";

function App() {
  return (
    <>
    <div className="App">
      <MyClock />
      {/* <Hellocss /> */}
      <Hellowhite />
      <HelloYellow />
    </div>
    </>
  );
}

export default App;
// 1. export must be exsistde cause to use module in other file
// 2. return type reference is div>header>sequence
