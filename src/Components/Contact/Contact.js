import React from 'react';
import Header from '../Header/Header'
import logoBlack from '../../images/Logo-black.png';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header img={logoBlack} color="black"></Header>
            <form style={{textAlign: 'center', marginTop:'20px',padding:'10px', fontFamily:'sans-serif'}} action="">
            <h2>Contact Us</h2>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Your Name" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Your Email" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Your Message" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Your Phone No" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'31%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
                 backgroundColor:'orange'
             }} type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Contact;