import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import barcode from './barcode.png';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import './container.css';
import { Link } from 'react-router-dom';

var counter = localStorage.getItem("itemSelect");
counter = counter - 1;

const data =[
    {"location": "Melbourne Central, 3000", "store":"Rebel Sport","totalPrice":180,"day":"Monday","items": {title: ["Nike Running Shoes", "Adidas Puffer Jacket", "Beanie"], quantity: 1, price: [100, 65, 15], category: "Clothes"}, "date": "26 June"},
    {"location": "Chadstone, 3148","store":"Opporto","totalPrice":38,"day":"Monday","items":{title: ["Chicken", "Wrap", "Burger"], quantity: 2, price: [15,10, 13], category: "Eat Out"}, "date": "26 June"},
    {"location": "Southbank, 3006","store":"Crown","totalPrice":70,"day":"Tuesday","items":{title: ["Tickets", "Popcorn", "Drinks"], quantity: 2, price: [50,13,7], category: "Entertainment"}, "date": "23 June"},
    {"location": "Chadstone, 3148","store":"Rebel Sport","totalPrice": 150,"day":"Tuesday","items":{title: ["Pants", "Shirt", "Shoes"], quantity: 1, price: [50,30, 70], category: "Clothes"}, "date": "23 June"},
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'black' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
    console.log(props);
    return (
        <Grid container xs={6} class={"container-BasicGrid"} id = "receiptPage">
            <div className = "backToList">
                <Button variant="text"><Link to = "list/" className = "link" id = "homeLink"><ArrowBackIcon className = "arrowBack"></ArrowBackIcon></Link></Button>
            </div>
            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} >
                    <Item
                        style={{ fontSize: 50 }}>
                    <b>{data[counter].store}</b></Item>
                </Grid>

                <Grid item xs={12}>
                    <Item
                    style={{ fontSize: 12 }}>{data[counter].location}</Item>
                </Grid>

                <Grid item xs={12} >
                    <Item
                    style={{ fontSize: 12 }}
                    >{data[counter].date}, 2022</Item>
                </Grid>

                <Grid item xs={12} >
                    <Item
                     style={{ fontSize: 16 }}>DIGITAL TAX INVOICE </Item>
                </Grid>
            </Grid>

            <Grid sx={{ py: 4 }}
                container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid container spacing={4}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"></Grid>

                <Grid item xs={8}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        {data[counter].items.title[0]}
                    </Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        ${data[counter].items.price[0]}</Item>
                </Grid>

                <Grid item xs={8} >
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        {data[counter].items.title[1]}</Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        ${data[counter].items.price[1]}</Item>
                </Grid>

                <Grid item xs={8} >
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        {data[counter].items.title[2]}</Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        ${data[counter].items.price[2]}</Item>
                </Grid>

                <Grid item xs={8} >
                    <Item
                        style={{ fontSize: 26, display: "flex", justifyContent: "flex-start" }}>
                        <b>TOTAL</b></Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 26, display: "flex", justifyContent: "flex-start" }}>
                        <b>${data[counter].totalPrice}</b></Item>
                </Grid>
                
                
                {/* <Grid item xs={12}>
                    <Item
                        style={{ fontSize: 20, display: "flex", justifyContent: "flex-start" }}>
                        PAYMENT INFO</Item>
                </Grid> */}
                

                <Grid item xs={12} >
                    <img src={barcode} />
                </Grid>
            </Grid>
        </Grid>
    );
}
