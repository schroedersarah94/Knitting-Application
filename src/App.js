import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/home/home.component';
import { BrowserRouter } from 'react-router-dom/dist';
import PatternIcon from './components/pattern-icon/pattern-icon.component';

function App() {
  return (
    <div className="App">
      <div>app component, seen on all pages</div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pattern-details" element={<PatternIcon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
