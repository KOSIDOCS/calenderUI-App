import React, { useState } from "react";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import FaceIcon from '@material-ui/icons/Face';
import Fab from '@material-ui/core/Fab';

function SideBar() {
    const [color, setColor] = useState(false);

    function handleChange() {
        setColor(!color);
    }

    return (
        <nav className="sidebar">
        <ViewWeekIcon className="topicon" fontSize="large" style={{ color: "#ef9028" }} />
        <div className="icons" >
        <HomeIcon onClick={handleChange} className={color ? "clicked" : "click"}/>
        <EventNoteIcon className="click"/>
        <DescriptionIcon className="click"/>
        <DonutSmallIcon className="click"/>
        <SettingsIcon className="click"/>
        </div>
        <Fab size="small" className="fab">
            <FaceIcon />
        </Fab>
        </nav>
    );
}

export default SideBar;