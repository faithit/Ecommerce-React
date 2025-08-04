import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import { products } from "./data";
function App() {
const [cart, setCart] = useState([]);
const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
      <Router>
          <div>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/products" element={<Products products={products} addToCart={addToCart}/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App
