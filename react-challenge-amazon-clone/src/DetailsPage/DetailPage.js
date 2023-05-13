import React from "react";
import "../Home.css";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

function HomeDetail() {
  return (
    <div className="home">
   
        <div className="home__row">
          <ProductDetail
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
        <Link to={"/"}>🏠</Link>
      </div>
  );
}

export default HomeDetail;
