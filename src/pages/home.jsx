import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
       <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
  <div className="text-center bg-light p-5 rounded shadow">
    <h1>Welcome to my ecommerce app</h1>
    <p className="lead">Your one-stop shop for all your favorite products</p>
    <Link to="/login" className="btn btn-outline-info">Login</Link>
  </div>
</div>
    );
}

export default Home;