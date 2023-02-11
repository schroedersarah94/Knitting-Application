import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatternDetails from './components/pattern-details/pattern-details.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';

export default function App() {
  return (
    <>
      <Header />
      <div className="page-content-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pattern-details" element={<PatternDetails patternId="1234" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}
