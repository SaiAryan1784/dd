import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Event2 from './Components/Events/Event2';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HackOverse from './Components/Events/HackOverse';
import Team from './Components/team/teams';
import About from './Components/about/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route exact path='/' element={<App />} />
  <Route exact path='/event' element={<Event2 />} />
  <Route exact path='/hackoverse' element={<HackOverse />} />
  <Route exact path='/#team' element={<Team />} />
  <Route exact path='/#about-section' element={<About />} />
  </Routes>

  </BrowserRouter>

  </React.StrictMode>
);


