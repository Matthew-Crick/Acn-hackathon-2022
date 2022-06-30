import logo from './logo.svg';
import './App.css';
import ListPage from './list';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import HomePage from './home';

function App() {
  var items = localStorage.getItem("items");
  if (items){

  }
  else{
    localStorage.setItem("items", 1);
    items = 1;
    window.location.reload();
  }

  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/list">
            <ListPage 
            />
          </Route>
          <Route exact path = "/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
