import logo from './logo.svg';
import './App.css';
import React from 'react';



import ListPage from './list';
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import HomePage from './home';
//import * as JsSearch from 'js-search';
import { useState } from 'react';

// const{ search }= window.location;
// const query = new URLSearchParams(search).get('s');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const filteredPosts = filterPosts(posts, searchQuery)

// const filterPosts = (posts, query) => {
//   if (!query){
//     return posts;f
//   }
//   return posts.filter((post)=>{
//     const postName = post.name.toLowerCase();
//     return postName.includes(query);
//   });
// };


// function App() {
//     const { search } = window.location;
//     const query = new URLSearchParams(search).get('s');
//     const [searchQuery, setSearchQuery] = useState(query || '');
//     const filteredPosts = filterPosts(posts, searchQuery);
//   return <Router>(
//     <div className="App">
//       <searchBar placeholder="Search the app" />
//       <div>
//         <Search
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//             />
//             <ul>
//                 {filteredPosts.map(post => (
//                     <li key={post.key}>{post.name}</li>
//                 ))}
//             </ul>
//       </div>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 2
//         </a>
//       </header>
//     </div>
//   )</Router>;
  

// }

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar className = "navBar">
        <Link to = "/home" className = "link">Home</Link>
        <Link to = "/list" className = "link">Receipts</Link>
        <Link to = "/list" className = "link">Search</Link>
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
