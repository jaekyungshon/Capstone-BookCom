/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

/*
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('/api/data')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  }, []);

  return (
      <div>
        받아온 값: {data}
      </div>
  );
}
*/

import {BrowserRouter, Routes, Ronpute, Route} from "react-router-dom";
import Home from "./page/Home";
import React from "react";
import PriceMenu from "./page/PriceMenu";
import News from "./page/News";

import SignUp from "./page/SignUp";
import Login from "./page/Login";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={"price-menu"} element={<PriceMenu/>} />
                <Route path={"news"} element={<News/>} />
                <Route path={"login"} element={<Login/>} />
                <Route path={"signup"} element={<SignUp/>} />


            </Routes>
        </BrowserRouter>
    );
}
export default App;
