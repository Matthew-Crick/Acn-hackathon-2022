import './App.css';
import HomePage from './home';
import BasicGrid from './container';
import ListPage from './list';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar className = "navBar">
        <Link to = "/home" className = "link">Home</Link>
        <Link to = "/list" className = "link">Receipts</Link>
        <Link to = "/receipt" className = "link">Receipt</Link>
        </Navbar>
        <hr></hr>
        <Switch>
        <Route exact path = "/receipt">
           <BasicGrid />
          </Route>
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