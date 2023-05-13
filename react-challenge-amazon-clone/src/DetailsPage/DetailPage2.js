import React from "react";
import "../Home.css";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";
function HomeDetail() {
  return (
    <div className="home">
   
        <div className="home__row">
        <ProductDetail
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <Link to={"/"}>🏠</Link>
      </div>
  );
}

export default HomeDetail;
