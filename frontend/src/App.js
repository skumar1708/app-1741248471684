import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;