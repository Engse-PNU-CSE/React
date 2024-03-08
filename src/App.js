import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {//컴포넌트의 이름은 항상 대문자로 시작할것
  return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            K-digital 6th Kim SeYoung
          </p>
        </header>
      </div>

  );
}

export default App;
