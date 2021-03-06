import React, { Component } from 'react'
import LoginPage from './components/LoginPage'
import BuyerPage from './components/BuyerPage'
import SellerPage from './components/SellerPage'
import TransactionPage from './components/TransactionPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/buyer/" component={BuyerPage} />
          <Route path="/seller" component={SellerPage} />
          <Route path="/transaction/:from" component={TransactionPage} />
        </div>
      </Router>
    );
  }
}

export default App
