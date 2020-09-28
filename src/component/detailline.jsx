import React from "react"
import Divider from '@material-ui/core/Divider';

function DetailLine(props) {
    return (
        <div className="which">
            <span>{props.name}</span>
            <Divider className="line" style={{backgroundColor: "#383938", width: "100px"}} />
            <span>{props.number}</span>
        </div>
        
    );
}

export default DetailLine;