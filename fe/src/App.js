import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginComponent from './components/account/LoginComponent';
import RegisterComponent from './components/account/RegisterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginComponent />} />
        <Route path='/account/login' element={<LoginComponent />} />
        <Route path='/account/register' element={<RegisterComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
