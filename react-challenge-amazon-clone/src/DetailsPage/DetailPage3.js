import React from "react";
import "../Home.css";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";
function HomeDetail() {
  return (
    <div className="home">
        <ProductDetail
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          /> 
        <div className="home__row">
    
        </div>
        <Link to={"/"}>🏠</Link>
      </div>
  );
}

export default HomeDetail;
