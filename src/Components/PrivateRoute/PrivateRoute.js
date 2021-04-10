import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { MyContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {

    const [showArea,setShowArea,loggedIn,setLoggedIn]=useContext(MyContext) 
    const location=useLocation()

    return (
        <Route
            {...rest}
            render={
                ()=> loggedIn ?
                 (children)
                : (
                    <Redirect to={
                        {pathname:"/login",
                            location
                    }
                }
            />
        )
            
        }

        />
    );
};

export default PrivateRoute;