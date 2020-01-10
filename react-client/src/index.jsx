import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
/* import $ from 'jquery'; */
import Header from './components2/Header.jsx';
import Footer from './components2/Footer.jsx'
import Body from './components2/Body.jsx'

import Men from './components2/categories/Men.jsx'
import Women from './components2/categories/Women.jsx'
import Login from './components2/user/login.jsx'
import ProductDetails from './components2/categories/ProductDetails.jsx'
import MenProductsCategories from './components2/categories/MenProductsCategories.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: []
    }
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

  render () {
    return (
      <Router>
        <div>
          <Header />
           <Switch>
            <Route  path ='/Home' component= {Body}/>
            <Route  path ='/Men' component= {MenProductsCategories}/>
            <Route  path ='/Women' component= {Women}/>
            <Route path='/Login' component={Login}/>
            <Route path='/ProductDetails' component={ProductDetails}/>
            <Route path='/MenProductsCategories' component={MenProductsCategories}/>
          </Switch>
        <Footer />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));