/* eslint-disable */
//Import Link to use
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';


//import serachData from searchBar
//Dummy data
const data =[
    {"store":"Myer","totalPrice":80,"day":"Monday","items": {title: "shirt", quantity: 2, price: 40, category: "Clothes"}, "date": "26 June"},
    {"store":"Opporto","totalPrice":30,"day":"Monday","items":{title: "Chicken", quantity: 2, price: 15, category: "Eat Out"}, "date": "26 June"},
    {"store":"Crown","totalPrice":100,"day":"Tuesday","items":{title: "Matilda", quantity: 2, price: 50, category: "Entertainment"}, "date": "23 June"},
    {"store":"Myer","totalPrice": 40,"day":"Tuesday","items":{title: "Pants", quantity: 1, price: 40, category: "Clothes"}, "date": "23 June"},
]
let filter = "";
let categoryFilter = "";
//Global variables
let counter = 0;
let currentDate = "";
let itemCount = 0;
// const [filter, useFilter] = useState<string>("")
itemCount = localStorage.getItem("items");

const filterCategory = (category) =>{
    if (categoryFilter === category){
        categoryFilter = "";
    }
    else{
        categoryFilter = category;
    }
    console.log(categoryFilter);
}

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

    const [searchTermF, setSearchTermF] = useState("");
    const inputElF = useRef("");
    const getSearchTermF = (category) => {
        searchHandlerF(category);
    };
    const searchHandlerF = (searchTermF) =>{
        setSearchTermF(searchTermF);
        if (categoryFilter === searchTermF){
            categoryFilter = "";
            console.log(categoryFilter);
        }
        else{
            console.log(searchTermF);
        categoryFilter = searchTermF;
        }
    }

    //Page content
    return (
        <div className = "pageContent">
            <SearchIcon class = "searchSymbol"></SearchIcon>
            <input type = "text" placeholder='Search through receipts' className = "prompt"
                value = {props.term} onChange={ getSearchTerm } ref = {inputEl}/>
                <></>
                <text className = "starPadding"> </text>
                <Button variant="contained" ><StarBorderIcon className = "QRCodeIcon"></StarBorderIcon></Button>
                <p></p>
                <div class = "buttonSection">
                <Button onClick={()=>getSearchTermF("Entertainment")}className = "categoryButton1" variant="contained">ENTERTAINMENT</Button>
                <text className = "categoryPadding"> </text>
                <Button onClick={()=>getSearchTermF("Clothes")} className = "categoryButton2" variant="contained">CLOTHES</Button>
                <text className = "categoryPadding"> </text>
                <Button onClick={()=>getSearchTermF("Eat Out")} className = "categoryButton3" variant="contained">EAT OUT</Button>
                </div>
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
    currentDate = "0";
    for (counter = 0; counter < items; counter++){
        //If search bar has content
        let storeName = data[counter].store.toLowerCase();
        //If search bar is empty
        if (filter.trim().length === 0 && categoryFilter === ""){
            //Push the jsx info for one day
            if (currentDate !== data[counter].date){
                currentDate = data[counter].date;
                printList.push(createDay());
            }
            printList.push(createReceipt());
            console.log(counter);
        }
        else if (categoryFilter === ""){
            if (//Filter by storename, date and day
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
        else if (filter.trim().length === 0){
            if(data[counter].items.category.includes(categoryFilter)){
                if (currentDate !== data[counter].date){
                    currentDate = data[counter].date;
                    printList.push(createDay());
                }
                printList.push(createReceipt());
            }
        }
        else if (filter.trim().length !== 0 && categoryFilter !== ""){
            if(
                (storeName.includes(filter.toLowerCase()) ||
                data[counter].date.includes(filter) ||
                data[counter].day.includes(filter))&&
                data[counter].items.category.includes(categoryFilter)){
                    if (currentDate !== data[counter].date){
                        currentDate = data[counter].date;
                        printList.push(createDay());
                    }
                    printList.push(createReceipt());
        }
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