import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Header, Welcome, WelcomeBack } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
<Header />
  <BrowserRouter>    
  <Routes>
    <Route index element ={ <App />} />    
    <Route path="welcome" element={<Welcome/> }/>
    <Route path="welcomeback" element={<WelcomeBack />}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>
);
reportWebVitals();
