/** @format */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Header, App, Welcome } from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
   <BrowserRouter>
   <Header/>
      <Routes>        
        <Route path='/' element={ [<App /> , <Welcome/> ]}/>
        {/* <Route path = 'welcome' element= { <Welcome/>}/> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
reportWebVitals();
