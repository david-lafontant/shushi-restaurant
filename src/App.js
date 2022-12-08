import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import contents from './components/content';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <div className="App">
        {contents.map((contents) => (
          <Menu
            key={contents.id}
            image={contents.image}
            name={contents.name}
          />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
