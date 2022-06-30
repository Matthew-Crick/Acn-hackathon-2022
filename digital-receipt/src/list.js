//Import Link to use
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

//import serachData from searchBar


//Dummy data
const data =[
    {"store":"Myer","totalPrice":3,"day":"Monday","items":[], "date": "26 June"},
    {"store":"Rebel","totalPrice":3,"day":"Monday","items":[], "date": "26 June"},
    {"store":"Rebel","totalPrice":6,"day":"Tuesday","items":[], "date": "23 June"},
    {"store":"Myer","totalPrice":6,"day":"Tuesday","items":[], "date": "23 June"},
]
let filter = "";

//Global variables
let counter = 0;
let currentDate = "";
let itemCount = 0;
// const [filter, useFilter] = useState<string>("")
itemCount = localStorage.getItem("items"); 


//Activate at the start when the page loads
const ListPage = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const inputEl = useRef("");

    const getSearchTerm = () => {
        searchHandler(inputEl.current.value);
    };

    const searchHandler = (searchTerm) =>{
        setSearchTerm(searchTerm);
        console.log(searchTerm);
        filter = searchTerm;
    }
    
    //Page content
    return ( 
        <div className = "pageContent">
            <SearchIcon class = "searchSymbol"></SearchIcon>
            <input type = "text" placeholder='Search through receipts' className = "prompt" 
                value = {props.term} onChange={ getSearchTerm } ref = {inputEl}/>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit&family=Work+Sans:wght@100&display=swap');
            </style>
            {/*Call function to create the list for the first time */}
            {createList(filter, itemCount)}
            <div className = "QRGoBack">
            <Button variant="contained"><Link to = "/" className = "link" id = "homeLink"><QrCodeIcon className = "QRCodeIcon"></QrCodeIcon></Link></Button>
            </div>
        </div> 
        
     );
}

//Creates the list based of inputs in the search bar
const createList = (filter, items) => {
    counter = 0;

    //Contains the jsx info, each element is one day
    let printList = [];
    
    //Loop through data
    printList.push(createDay());
    currentDate = data[counter].date;

    for (counter = 0; counter < items; counter++){
        //If search bar has content
        let storeName = data[counter].store.toLowerCase();
        //If search bar is empty
        if (filter.trim().length === 0){
            //Push the jsx info for one day
            if (currentDate !== data[counter].date){
                currentDate = data[counter].date;
                printList.push(createDay());
            }
            printList.push(createReceipt());
            console.log(counter);
        }
        else if (
            //Filter by storename, date and day
            storeName.includes(filter.toLowerCase()) ||
            data[counter].date.includes(filter) ||
            data[counter].day.includes(filter)){

                //Push the jsx info for one day
                if (currentDate !== data[counter].date){
                    currentDate = data[counter].date;
                    printList.push(createDay());
                }
                printList.push(createReceipt());
            }
    }

    //Set the jsx into a div block to display
    return(
        <div>
            {printList}
        </div>
    );
}

//Creates jsx for all the receipts in one day
const createDay = () => {
    //Extract current day to display
    var day = data[counter].day;

    //Returnt the complete jsx code for one day
    return(
        <div className = "newDay">
        <h2 className = "receiptTitle">{day}</h2>
        </div>
    );
} 

//Creates individual receipt entries
const createReceipt = () => {
    //Return jsx based of current counter
    return(
        <Link to = "/container" className = "link">
        <div className = "tablePadding">
        <table className = 'receiptInfo'>
        <tr className = 'receiptBlock'>
            {/* Use an a tag here potentially to make whole row clicable*/}
            <td className = 'receiptDate'>{data[counter].date}</td>
            <td className = 'receiptStore'>{data[counter].store}</td>
            <td className = 'receiptPrice'>${data[counter].totalPrice}</td>
        </tr>
        </table>
        <br></br>
        </div>
        </Link>
    );
} 

export default ListPage;