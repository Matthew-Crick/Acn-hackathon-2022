import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
//Import Link to use
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
var itemCount = localStorage.getItem("items"); 

const HomePage = () => {
  const [data, setData] = useState('No result');

  return (
    <>
    <div className = "QRCode">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ height: '100%'}}
        />
        <p>Please scan a QR Code</p>
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