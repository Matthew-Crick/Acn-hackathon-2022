
import React from 'react'
import { useHistory } from 'react-router-dom';
//import searchBar from './searchBar';
//import SearchIcon from "@material-ui/icons/Search";
//import * as JsSearch from 'js-search';
import Box from '@mui/material/Box';


export const searchData = [
  {"store": "Myer", "price": 50.8, "date": "3 June 2022", "day": "Saturday", "item": {title: "shirt", quantity: 2}},
  {"store": "Nike", "price": 150.5, "date": "6 June 2022", "day": "Thursday", "item": {title: "shoes", quantity: 2}},
  {"store": "Adidas", "price": 50, "date": "7 June 2022", "day": "Monday", "item": {title: "shoes", quantity: 1}},
  {"store": "David jones", "price": 80, "date": "8 June 2022", "day": "Thursday", "item": {title: "shirt", quantity: 4}},
  {"store": "Apple", "price": 850, "date": "2 June 2022", "day": "Tuesday", "item": {title: "phone", quantity: 1}}

]

const SearchBar = ({searchQuery, setSearchQuery}) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };
    return <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="header-search">
          <span className="visually-hidden">Search the app</span>
      </label>
      <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search the app"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
};



export default SearchBar




