
import './App.css';
import Location from './components/Location';
import barner from './image/barner.svg'
import { useState } from 'react';


function App() {

   

  return (
    <div className="App">
      <img src={barner} alt="" />
     
      <Location />
      <button>anterior</button>
    </div>
  );
}

export default App;
