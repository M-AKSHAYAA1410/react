import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'; // Make sure you have a Login component
import Products from './components/Products'; // Make sure you have this component
import Fruits from './components/Fruits/Fruit';
import Vegetable from './components/Vegetable';
import Masala from './components/masala';
import Sugar from './components/sugar';
import Rice from './components/rice';
import Flour from './components/flour';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} /> {/* Register page as home */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
     <Route path="/fruits" element={<Fruits/>}/>
     <Route path="/vegetable"element={<Vegetable/>}/>
     <Route path="/Masala"element={<Masala/>}/>   
     <Route path="/sugar"element={<Sugar/>}/> 
     <Route path="/rice"element={<Rice/>}/>
     <Route path="/flour"element={<Flour/>}/>   
    </Routes>
  );
};

export default App;
