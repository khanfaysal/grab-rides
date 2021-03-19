import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import DestinationSearch from './components/DestinationSearch/DestinationSearch';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route exact path = '/'>
        <Home></Home>
           </Route>
        <Route path="/destination">
          <DestinationSearch></DestinationSearch>
        </Route>
        <Route path="/login">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
