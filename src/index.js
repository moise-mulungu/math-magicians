import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/navigation';
import Home from './components/home';
import Quote from './components/quote';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/calculator" element={<App />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
