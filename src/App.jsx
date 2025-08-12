import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import { products } from "./data/data.js";
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/footer.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/Login.jsx";
import ProductList from "./components/ProductList.jsx";
function App() {
const [cart, setCart] = useState([]);
const [message,setMessage]=useState("");

const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.name} added to cart`);
    setTimeout(()=>{
        setMessage('');
        },2000)
  };
const removeFromCart = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};
  return (
      <Router>
          <div>
              <Navbar cart={cart}/>
              {message && <div className="message">{message} </div>}
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/products" element={<Products products={products} addToCart={addToCart}/>}/>
                  <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />}/>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/productlist" element={<ProductList />} />
              </Routes>
              <Footer/>
          </div>
      </Router>
  );
}

export default App
