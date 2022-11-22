import React from 'react';


import {Home,Contact,Skills,Work} from './container/'
import {Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;