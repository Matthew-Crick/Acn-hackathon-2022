import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import barcode from './barcode.png';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import './container.css';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'black' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Grid container xs={6} class={"container-BasicGrid"} id = "receiptPage">
            <div className = "backToList">
                <Button variant="contained"><Link to = "list/" className = "link" id = "homeLink"><ArrowBackIcon className = "arrowBack"></ArrowBackIcon></Link></Button>
            </div>
            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} >
                    <Item
                        style={{ fontSize: 50 }}>
                    <b>Rebel Sport</b></Item>
                </Grid>

                <Grid item xs={12}>
                    <Item
                    style={{ fontSize: 12 }}>Melbourne Central, 3000</Item>
                </Grid>

                <Grid item xs={12} >
                    <Item
                    style={{ fontSize: 12 }}
                    >June 27, 2022, 11:22AM</Item>
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
                        Nike Running Shoes
                    </Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        $100</Item>
                </Grid>

                <Grid item xs={8} >
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        Adidas Puffer Jacket</Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        $65</Item>
                </Grid>

                <Grid item xs={8} >
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        Beanie</Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 22, display: "flex", justifyContent: "flex-start" }}>
                        $15</Item>
                </Grid>

                <Grid item xs={8} >
                    <Item
                        style={{ fontSize: 26, display: "flex", justifyContent: "flex-start" }}>
                        <b>TOTAL</b></Item>
                </Grid>

                <Grid item xs={4}>
                    <Item
                        style={{ fontSize: 26, display: "flex", justifyContent: "flex-start" }}>
                        <b>$180</b></Item>
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
