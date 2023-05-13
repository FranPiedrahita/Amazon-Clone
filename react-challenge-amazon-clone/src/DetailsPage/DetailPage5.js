import React from "react";
import "../Home.css";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";
function HomeDetail() {
  return (
    <div className="home">
   
        <div className="home__row">
          <ProductDetail
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={598.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                     
        </div>
        <Link to={"/"}>🏠</Link>
      </div>
  );
}

export default HomeDetail;
