import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
//Import Link to use
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
var itemCount = localStorage.getItem("items");



const QRScanned = (data) =>{
  if (data === "No result"){
    //Do nothing
  }
  else{
    itemCountInc();
    console.log("Done");
    window.location.href = 'http://localhost:3000/container'; 
  }
}

const HomePage = () => {
  const [data, setData] = useState('No result');

  return (
    <>
    <div className = "QRCode">
      <br></br>
    <h2>Add Digital Receipt</h2>
    <br></br>
    <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }

          if (error) {
            console.info(error);
          }
        }}
        style={{ height: '100%'}}
        />
        <p>{QRScanned(data)}</p>
        </div>
        <div className = "receiptButton">
            <Button variant="outlined" className = "receiptButtonButton" onClick={itemCountInc}>
                <Link to = "/container" className = "link">Scan</Link>
            </Button>
            <text className = "buttonSpacing"></text>
            <Button variant="outlined" className = "receiptButtonButton">
                <Link to = "/list" className = "link">Receipts</Link>
            </Button>
        </div>
    </>
  );
};
 
const itemCountInc = () => {
  if (itemCount < 4){
    itemCount++;
    localStorage.setItem("items", itemCount); 
    window.location.reload();
  }
}
export default HomePage;