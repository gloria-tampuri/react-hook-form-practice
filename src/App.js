import './App.css';
import React, { useState } from 'react';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'


function App() {

  const [info, setInfo] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const gettingInfo = (data) => {
    setInfo(data)
    console.log(data);
  }

  const logoutHandler = () => {
    setIsLoggedIn(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login ongetInfo={gettingInfo} />} />
        <Route path='/dashboard' element={<Dashboard data={info} />} onlogout={logoutHandler} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
