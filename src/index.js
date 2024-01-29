/** @format */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Welcome } from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Routes>        
        <Route path='/' element={ <App /> }/> 
        {/* Prima avevo messo un array {[<App/> , <Welcome/>]} per questo motivo vedevo il duplicato di Welcome. */}
      
      </Routes>
    </BrowserRouter>
);
reportWebVitals();
