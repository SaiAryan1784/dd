import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Event from './Components/Events/Event';
import Home from './Components/Home';
import About from './Components/about/About';
import Team from "./Components/team/teams"
import LetsConnect from './Components/letsConnect/LetsConnect';
import Community from './Components/community/community';
import Faculty from './Components/faculties/faculties';

const App = () => {
  return (
    <div>
     <Home />
    {/* <Event/> */}
    <Community />
    <About/>
    <Faculty />
    <Team />
    <LetsConnect />
    </div>
  )
}

export default App