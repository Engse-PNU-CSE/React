import "./App.css";
import MainHeader from "./01/MainHeader";
import SayHello from "./01/Hello";

function App() {
  return (
    <>
    <div className="App">
      <MainHeader />
      <SayHello />
    </div>
    </>
  );
}

export default App;
// 1. export must be exsistde cause to use module in other file
// 2. return type reference is div>header>sequence
