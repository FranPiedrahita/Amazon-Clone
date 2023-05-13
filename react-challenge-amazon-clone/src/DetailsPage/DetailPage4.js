import React from "react";
import "../Home.css";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";
function HomeDetail() {
  return (
    <div className="home">
   
        <div className="home__row">
          <ProductDetail
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />    
        </div>
        <Link to={"/"}>🏠</Link>
      </div>
  );
}

export default HomeDetail;
