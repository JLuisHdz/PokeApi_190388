import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Matricula from "./components/matricula";
import Pokemon from "./components/Pokemon";
import NavBar from "./components/NavBar";
import './config/i18next-config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <NavBar/>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path='/matricula' element = {<Matricula/>} />
        <Route path='/pokemons/:id' element={<Pokemon/>} />
    </Routes>
    </BrowserRouter>
  </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
