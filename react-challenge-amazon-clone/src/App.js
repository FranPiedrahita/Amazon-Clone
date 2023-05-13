import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { createContext } from "react";
import ReactSwitch from"react-switch";
import DetailPage from "./DetailsPage/DetailPage";
import DetailPage2 from"./DetailsPage/DetailPage2";
import DetailPage3 from"./DetailsPage/DetailPage3";
import DetailPage4 from"./DetailsPage/DetailPage4";
import DetailPage5 from"./DetailsPage/DetailPage5";
import DetailPage6 from"./DetailsPage/DetailPage6";
export const ThemeContext= createContext(null);

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const[theme,setTheme] =useState("dark")
const toggleTheme = () =>{
  setTheme((curr)=>(curr === "ligth"?"dark" :"ligth"))
}
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="app" id={theme}>
        <div className="switch">
        <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"}/>
        </div>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/product/12321341" component={DetailPage} >
          </Route>
          <Route path="/product/49538094" component={DetailPage2} >
          </Route>  <Route path="/product/4903850" component={DetailPage3} >
          </Route>  <Route path="/product/23445930" component={DetailPage4} >
          </Route>  <Route path="/product/3254354345" component={DetailPage5} >
          </Route>  <Route path="/product/90829332" component={DetailPage6} >
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      </ThemeContext.Provider>
    </Router>
 

  );
}

export default App;
