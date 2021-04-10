import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import { touristPlaces } from "../../travelInfo";
import TravelArea from "../TravelArea/TravelArea";

const TravelSection = () => {
  const [showArea,setShowArea] = useContext(MyContext)
  return (
    <Grid container item xs={12} justify="space-between" style={{paddingRight:"20px"}}>
      <Grid item md={6} style={{ padding: "20px 9%", textAlign:"center" }}>

        <h1 style={{ color: "white", fontSize: "60px" }}>
          {showArea.title}
        </h1>

        <h5 style={{ color: "white", fontWeight: "500" }}>
          {showArea.description}
        </h5>

        <Link to="/booking" style={{textDecoration:'none', color:"black"}}>
          <Button style={{background:"orange"}}  variant="contained">
            Booking
          </Button>
        </Link>

      </Grid>
    <Grid
        container item md={6}
        justify="center" spacing={1}
        style={{ marginTop: "100px", padding: "5px" }}
      >
        {
          touristPlaces.map((place) => {
            return <TravelArea key={place.id} place={place}></TravelArea>;
          })
        }
      </Grid>
    </Grid>
  );
};

export default TravelSection;
