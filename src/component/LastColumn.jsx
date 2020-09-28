import React from "react";
import DetailLine from "./detailline";
import BuyTicket from "./buyticket";
import ImageSlider from "./imageslider";

function LastColumn() {
    return (
        <div className="lastcolumn">
        <div className="btn">Sport Cars 300+</div>
        <div className="eventdesc">
            <h1>Track Night Premier Event</h1>
            <p>Circular night race. The event accepts cars of the 300+ 
            horsepower category. Cars must be equipped with a reinforcing
            body frame.
            </p>
        </div>

        <ImageSlider />
        
        <div className="under">
        <DetailLine name="Total time" number="2:15:00"/>
        <DetailLine name="Starts" number="6"/>
        <DetailLine name="Rings" number="24"/>
        <DetailLine name="Drivers" number="2"/>
        </div>

        <BuyTicket />
        </div>
    );
}

export default LastColumn;