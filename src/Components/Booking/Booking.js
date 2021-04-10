import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import logo from '../../images/Logo.png'
import { MyContext } from '../../App';
import { Button, FormGroup, Grid } from '@material-ui/core';
import './Booking.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Link, useHistory } from 'react-router-dom';


const Booking = () => {

    const history = useHistory()
    const [showArea]=useContext(MyContext)
    const [from,setFrom]=useState(null)
    const [to,setTo]=useState(null)

    const formControler =(event)=>{
        event.preventDefault()
        history.push("/booking/destination")
    }

//Returned from Booking Component
    return (
        <div style={
                {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)), url(${showArea.img})`, 
                height:"100vh", backgroundSize:"cover",
                padding:"0 30px"
                }
             }>

            <Header img={logo} color="white"></Header>
            
            <Grid container item xs={12} style={{color:"white",  marginTop:"40px"}}> 

                <Grid item xs={12} md={6}  style={{padding:"0 9%"}}>
                    <h1 style={{fontSize:"60px"}}>
                        {showArea.title}
                    </h1>
                    <h5 style={{fontWeight:"500"}}>
                        {showArea.description}
                    </h5>
                </Grid>

                <Grid item xs={12} md={6} >
                    <form className="booking-form" style={
                                {padding:"7% 9% 7% 7%", margin:"auto",
                                marginTop:"50px", width:"340px"}
                                    }
                            onSubmit={formControler}>

                        <FormGroup className="form-group" >
                            
                            <label htmlFor="origin">
                                Origin
                            </label>
                            <input id="origin" type="text" required/>

                            <label htmlFor="origin">
                                Destination
                            </label>
                            <input id="origin" type="text" required/>

                            <div className="datepicker-section" style={{display:"flex"}}>
                                <div style={{marginRight:"5px"}}>
                                    <p>From</p>
                                    <DatePicker selected={from} 
                                        className="date-picker"
                                        onChange={date => setFrom(date)} 
                                        required
                                        placeholderText="Peek a date" />
                                </div>
                                <div>
                                    <p>To</p>
                                    <DatePicker selected={to}
                                        className="date-picker"
                                        onChange={date => setTo(date)}
                                        required
                                        placeholderText="Peek a date" />
                                </div>
                            </div>
                                <input type="submit" value="Start Booking"/>

                        </FormGroup>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Booking;