
import React from "react";
import { Link } from "react-router-dom";
function  Navbar({cart}){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <Link className="navbar-brand" to="/">EShop</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
            <div className="collapse navbar-collapse " id="mynav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/productlist">ProductsList</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart
                            {cart.length > 0 && (
                                <span className="cart-count">{cart.length}</span>)}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-outline-info" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-outline-info" to="/login">Login</Link>
                    </li>

                </ul>


            </div>

        </nav>
    );
}

export default Navbar;