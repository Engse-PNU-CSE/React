import "./App.css";
import MyClock from "./01/MyClock";
import { FaHome } from "react-icons/fa";
import MyFestival from "./12/MyFestival";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyLotto from "./06/MyLotto";
import FoodMain from "./07/Foodmain";
import Frcst from "./14/Frcst";
import UltraFcst from "./14/UltraFcst";
import VilageFcst from "./14/VilageFcst";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <MyClock />
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-100">
      <div>Hello, React</div>
          <div className='flex justify-end items-center'>
          <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/frcst'>Frcst</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/festival'>Festival</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/food'>Foodmarket</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/lotto'>Lotto</Link>
            </div>
            <Link to='/'>
              <FaHome className='text-2xl text-black' />
            </Link>
          </div>
      </header>
      <main className="grow flex flex-col justify-center items-center">
        <Routes>
            <Route path='/' element={<></>} />
            <Route path='/frcst' element={<Frcst />} />
            <Route path='/lotto' element={<MyLotto />} />
            <Route path='/food' element={<FoodMain />} />
            <Route path='/urtra/:dt/:area/:x/:y' element={<UltraFcst />} />
            <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />

            <Route path='/festival' element = {<MyFestival />} />
          </Routes>
      </main>
      <footer className="flex justify-center items-center text-cyan-50 bg-cyan-950 h-20">
        © 2024 KimEngse, CSE-PNU. All rights reserved.
      </footer>
    </div>
    </BrowserRouter>
  );
}//serviceKey=

export default App;
