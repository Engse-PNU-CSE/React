import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-auto'>
      <header className='flex justify-between h-20 bg-sky-200 text-xl font-bold'>
        <div>React Train2</div>
        <div>Home</div>
      </header>
      <main>
        Main
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        Footer
      </footer>
    </div>
    </div>
  );
}

export default App;
