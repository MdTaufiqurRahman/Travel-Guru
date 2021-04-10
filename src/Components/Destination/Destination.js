import React from 'react';
import Header from '../Header/Header'
import blackLogo from '../../images/Logo-black.png'
import { Grid } from '@material-ui/core';

import {hotelsInfo} from '../../travelInfo'
import HotelDetails from '../HotelDetails/HotelDetails';
import Map from '../Map/Map';


const Destination = () => {
    return (
        <div>
           <Header color="black" img={blackLogo}></Header>

           <Grid container item xs={12} 
                justify="space-between" style={{marginTop:"30px"}}>
               <Grid item xs={12} md={6}>
                   <div style={{marginLeft:"15px"}}>

                        <b style={{color:"grey"}}>
                            252 Stays Sep 17-20
                        </b>
                        <h3 style={{margin:0}}>
                            Stay in Cox's Bazar
                        </h3>
                   </div>
   
                {
                    hotelsInfo.map(hotel=>{
                        return (
                            <HotelDetails key={hotel.id} hotel={hotel}></HotelDetails>
                        )
                    })
                }

               </Grid>

               <Grid item xs={12} md={6}>
                    <Map></Map>
               </Grid>

           </Grid>
        </div>
    );
};

export default Destination;