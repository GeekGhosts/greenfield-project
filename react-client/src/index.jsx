import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './components/home/Navbar.jsx';
import FooterPage from './components/home/Footer.jsx'
import Article from './components/Article.jsx'
import Men from './components/categories/Men.jsx'
import Women from './components/categories/Woman.jsx'
import SignUp from './components/user/signup.jsx'
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
        <Switch>
          <Route path="/" exact component={NavBar}/>
          <Route path="/home"  component={NavBar}/>
          <Route path="/Women"  component={Women}/>
          <Route path="/Men"  component={Men}/>
          <Route path="/signup" component={SignUp}/>
          </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));