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

//Activate at the start when the page loads
const ListPage = () => {
    //Page content
    return ( 
        <div className = "pageContent">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap');
            </style>
            {/*Call function to create the list for the first time */}
            {createList(filter)}
        </div> 
     );
}

//Creates the list based of inputs in the search bar
const createList = (filter) => {

    //Contains the jsx info, each element is one day
    let printList = [];
    
    //Loop through data
    for (counter = 0; counter < data.length; counter++){
        //If search bar is empty
        if (filter.trim().length === 0){
            currentDate = data[counter].date;
            printList.push(createDay());
        }
        //If search bar has content
        else if (
            //Filter by storename, date and day
            data[counter].store.includes(filter) ||
            data[counter].date.includes(filter) ||
            data[counter].day.includes(filter)){
                //Set current date to current receipt
                currentDate = data[counter].date;
                //Push the jsx info for one day
                printList.push(createDay());
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
    //Contains jsx for all the receipts in one day
    let printReceipts = [];
    //Extract current day to display
    let day = data[counter].day;

    //Will have at least one receipt so push for current counter
    printReceipts.push(createReceipt(counter));
    
    //If counter is not at the end
    if (counter != data.length-1){
        //While counter is less than the last element
        while (counter < data.length-1){
            //Check if the next receipt has the same date
            if (currentDate === data[counter+1].date){
                //Check if matches filters
                if (
                    data[counter+1].store.includes(filter) ||
                    data[counter+1].date.includes(filter) ||
                    data[counter+1].day.includes(filter)){
                        printReceipts.push(createReceipt(counter+1));
                    }

                //Increment the counter
                counter++;
            }
            //If not same date then break to move onto next day
            else{
                break;
            };
        }
    }

    //Returnt the complete jsx code for one day
    return(
        <div className = "newDay">
        <h2 className = "receiptTitle">{day}</h2>
        <table className = 'receiptInfo'>
            {printReceipts}
        </table>  
        </div>
    );
} 

//Creates individual receipt entries
const createReceipt = (counter) => {
    //Return jsx based of current counter
    return(
        <tr>
            {/* Use an a tag here potentially to make whole row clicable*/}
            <td className = 'receiptDate'>{data[counter].date}</td>
            <td className = 'receiptStore'>{data[counter].store}</td>
            <td className = 'receiptPrice'>${data[counter].totalPrice}</td>
        </tr>
    );
} 

export default ListPage;