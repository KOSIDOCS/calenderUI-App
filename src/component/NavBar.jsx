import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import woman from "../img/Woman.jpeg";
import BookIcon from '@material-ui/icons/Book';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        backgroundColor: "#2c3542",
        color: "white",
        marginLeft: "40px",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "white"
      },
      iconButton: {
        padding: 10,
        color: "white",
      }
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className="navbar">

        <Paper component="form" className={classes.root}>
        <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
        </Paper>

        <div className="allicon">
        
        <div className="button"> 
        <EmailIcon className="icon"/>
        <span>3</span> 
        </div>
        <div className="button"> <BookIcon className="icon"/> </div>
        <div className="button"> <NotificationsIcon className="icon"/> </div>
        <div className="button"> <MoreHorizIcon className="icon"/> </div>
        <Avatar className="avatar" alt="Remy Sharp" src={woman} />
        </div>

        </div>
    );
}

export default NavBar;