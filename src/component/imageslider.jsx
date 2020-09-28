import React from "react";
import bike from "../img/bikerace.jpeg";
import Fab from '@material-ui/core/Fab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ImageSlider() {
    return (
        <div className="displayimg">
        <div className="nextimg">
        <Fab size="large" style={{marginRight: "30px", backgroundColor: "#42a3fb", color: "white", boxShadow: "0px 25px 30px -7px #0d306d, 105px 0 99px 6em #06080B"}}> <ArrowForwardIosIcon fontSize="small" /> </Fab>
        </div>

            <picture>
                <img src={bike} alt="img"/>
            </picture>
            <picture>
                <img src={bike} alt="img"/>
            </picture>

        </div>
    );
}

export default ImageSlider;