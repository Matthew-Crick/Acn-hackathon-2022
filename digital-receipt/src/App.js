import './App.css';
import ListPage from './list';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import HomePage from './home';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar className = "navBar">
        <Link to = "/home" className = "link">Home</Link>
        <Link to = "/list" className = "link">Receipts</Link>
        </Navbar>
        <hr></hr>
        <Switch>
          <Route exact path = "/list">
           <ListPage />
          </Route>
          <Route exact path = "/home">
           <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
