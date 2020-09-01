import React from "react";
import {Link} from 'react-router-dom'

export default function LayoutSimple({ children }) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/"><a className="navbar-brand">ShopName</a></Link>
        <button className="btn btn-outline-primary my-2 my-sm-0">Cart</button>
      </nav>
      <div className="container">
        {children}
      </div>
    </header>
  );
}

// lägg in header med namn på webbsidan och en cart-knapp
