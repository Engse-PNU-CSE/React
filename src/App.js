import "./App.css";
import MyClock from "./01/MyClock";
import MyBoxOffice from "./05/MyBoxOffice";
import MyLotto from "./06/MyLotto";
import Foodmain from "./07/Foodmain";
import MyClock8 from "./08/MyClock";


function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <MyClock />
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-100">
        <h1>Hello, React</h1>
        <h1>Home</h1> 
      </header>
      <main className="grow flex flex-col justify-center items-center">
        <MyClock8 />
      </main>
      <footer className="flex justify-center items-center text-cyan-50 bg-cyan-950 h-20">
        © 2024 KimEngse, CSE-PNU. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
