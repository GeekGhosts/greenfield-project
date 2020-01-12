import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";

import ReactDOM from "react-dom";
import $ from 'jquery';
import Header from "./components2/Header.jsx";
import Footer from "./components2/Footer.jsx";
import Body from "./components2/Body.jsx";

import Cart from "./components2/user/cart.jsx";
import Login from "./components2/user/login.jsx";
import SignUp from "./components2/user/signup.jsx";
import Account from "./components2/user/account.jsx";


import Men from "./components2/categories/Men.jsx";
import Women from "./components2/categories/Women.jsx";
import ProductDetails from "./components2/categories/ProductDetails.jsx";
import MenProductsCategories from "./components2/categories/MenProductsCategories.jsx";
import WomenProductsCategories from "./components2/categories/WomenProductsCategories.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        userId: "",
        hastoken: false
      }
    };
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/someroute',
    //   success: (data) => {
    //     this.setState({
    //       someState: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Body} />

            <Route exact path="/men" component={MenProductsCategories} />

            <Route exact path="/women" component={Women} />

            <Route path="/men/category" component={WomenProductsCategories} />

            <Route path="/women/category" component={WomenProductsCategories} />

            <Route path="/men/category/:ProductID" component={ProductDetails} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/account" component={Account} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
