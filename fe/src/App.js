import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginComponent />} />
      </Routes>
    </div>
  );
}

export default App;
