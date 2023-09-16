import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/account/Login';
import Register from './components/account/Register';
import Admin from './components/admin/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/register' element={<Register/>} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
