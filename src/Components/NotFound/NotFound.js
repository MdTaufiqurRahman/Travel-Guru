import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
const NotFound = () => {
    return (
        <div style={{
            height:"100vh", 
            width:"100vw",
            backgroundImage: `url(${notfound})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}>
            
        <Link to="/">
            <Button 
                style={{
                    background:"#e0e014",
                    color:"182653", 
                    padding:"10px 50px",
                    position:"fixed",
                    top:"5px",
                    right:"5px"
                }}>                  
                Home
            </Button>
        </Link>
            
        </div>
    );
};

export default NotFound;