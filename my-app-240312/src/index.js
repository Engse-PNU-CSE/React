import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//1. component starts upper char
//   ex) App -> O           app -> X
//   ex) App -> components  app -> html tag
//2. react components is function, is not class
//3. function components is js function, too
//4. function can be maked call-back function 
//   ex) const App = () => {
//           return ();
//       }
//5. component must have return, and return can have some sequences
reportWebVitals();
