import './App.css';
import HomePage from './home';
import BasicGrid from './container';
import ListPage from './list';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { useState } from 'react';


function App() {
  var items = localStorage.getItem("items");
  if (items){
    let t = 3;
  }
  else{
    localStorage.setItem("items", 1);
    items = 1;
    window.location.reload();
  }
<<<<<<< HEAD

=======
>>>>>>> main
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path = "/receipt">
           <BasicGrid />
          </Route>
          <Route exact path = "/list">
            <ListPage
            />
          </Route>
          <Route exact path = "/">
            <HomePage/>
          </Route>
          <Route exact path = "/container">
            <BasicGrid/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
