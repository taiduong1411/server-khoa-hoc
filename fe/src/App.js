import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginComponent from './components/account/LoginComponent';
import RegisterComponent from './components/account/RegisterComponent';
import AdminComponent from './components/admin/AdminComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginComponent />} />
        <Route path='/account/login' element={<LoginComponent />} />
        <Route path='/account/register' element={<RegisterComponent/>} />
        <Route path='/admin' element={<AdminComponent />} />
      </Routes>
    </div>
  );
}

export default App;
