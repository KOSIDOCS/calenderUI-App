import React from "react";
import SideBar from "./SideBar";
import SecondColumn from "./SecondColumn";
import MiddleColumn from "./MiddleColumn";

function App() {
    return (
        <div className="page">
           <SideBar />
           <SecondColumn />
           <MiddleColumn />
        </div>
    );
}

export default App;