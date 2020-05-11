import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop"

const HatsPage = () => (
  <h1>HATS</h1>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
