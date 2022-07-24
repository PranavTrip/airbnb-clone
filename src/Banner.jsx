import { Button } from "@mui/material";
import React from "react";
import "./css/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_search">
          <Button variant="outlined" className="banner_searchButton">Search Dates</Button>
        </div>
        <div className="banner_info">
          <h1>Get Out and Stretch Your Imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button variant="outlined">Explore Nearby</Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
