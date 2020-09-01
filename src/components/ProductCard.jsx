import React from "react";
import {Link} from 'react-router-dom'
// import BtnAddToCart from './BtnAddToCart'

export default function ProductCard( {imgURL, imgAlt, name, price, description, id} ) {
  return (
      <div  className="col-md-4 text-center mb-2">
        <Link to={`/products/${id}`}>
          <div className="card">
              <img className="card-img-top" src={ imgURL } alt={ imgAlt } />
              <div className="card-body">
                <h5 className="card-title m-3">{ name }</h5>
                <p className="card-text">{ description }</p>
                <p className="card-text">{ price }</p>
                {/* <BtnAddToCart />               */}
                <button className="btn btn-primary">Add to cart</button>
              </div>
          </div>
        </Link>
    </div>
  )
}

// bygger upp kortet i jsx
// lägg in info från props
//länka in BtnAddToCart
