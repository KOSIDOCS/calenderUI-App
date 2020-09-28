import React from "react";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        // width: "100%",
        color: "white",
        justifyContent: 'space-between',
        marginTop: '40px',
        marginRight: "50px",
    },
    buybtn: {
        backgroundColor: "#42a3fb",
        width: "80%",
        textAlign: "center",
        height: "50px",
        paddingTop: "14px",
        borderRadius: "7px",
        boxShadow: "0px 10px 35px 8px #0d306d",
    },
    favoritebtn: {
        backgroundColor: "#42a3fb",
        width: "50px",
        height: "50px",
        textAlign: "center",
        paddingTop: "14px",
        borderRadius: "7px",
        boxShadow: "0px 10px 35px 8px #0d306d",
    },
}));
// boxShadow: "0px 25px 30px -7px #ef9028, 30px 0 20px 1em #06080B"
// boxShadow: "0px 20px 35px 8px #0d306d"
function BuyTicket(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.buybtn}>Buy Ticket</div>
            <div className={classes.favoritebtn}> <BookmarkIcon /> </div>
        </div>
    );
}

export default BuyTicket;