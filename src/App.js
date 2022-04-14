import React from 'react';
import Color from './Color';
import Hello from './Hello';
import Home from './Home';
import Number from './Number';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';


function App()  {
  return (
    <BrowserRouter >
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/:num" element={<Number />} />
          <Route path="/:comment/:color/:backgroundColor" element={<Color />}/>
          <Route path="/say/:word" element={<Hello />}/>
        </Routes>
    </BrowserRouter>
  );
};
export default App;
