import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/Header/header";
import SignInAndSignUpPage from "./pages/signInAndSignUp/signInAndSignUp";


function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
