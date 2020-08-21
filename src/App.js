import React, { Component } from 'react';
import {Switch,Router, Route} from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar from './components/Navbar';
import  ProductList from './components/ProductList';
import  Details from './components/Details';
import  Carts from './components/Cart';
import  Default from './components/Default';

class App extends Component{
  render()
  {
  return (
  <React.Fragment>
    <Navbar></Navbar>
    <Switch>
    <Route  exact path ="/" component={ProductList}></Route>
      <Route path ="/details" component={Details}></Route>
      <Route path ="/cart" component={Carts}></Route>
      <Route component={Default}></Route>
    </Switch>
  
  </React.Fragment>

  );
  }
}

export default App;
