import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { activity1, activity2, activity3 } from '../activities';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    card: {
       display: 'flex',
       flexDirection: 'row',
       borderRadius: "10px",
       backgroundColor: "#2c3542",
       marginTop: "22px",
       
    },
    cardlast: {
       display: 'flex',
       flexDirection: 'row',
       borderRadius: "10px",
       backgroundColor: "#42a3fb",
       boxShadow: "0px 3px 35px -3px #0d306d",
       marginTop: "22px",
    },
    divider: {
        display: 'flex',
        alignSelf: "center",
        height: "50px",

    }
    
  }));

function ListColumn() {
    const classes = useStyles();
    let change = false;

    return (
        <div className="listcolumn">

        <div className={classes.root}>
        <h3>September, 16</h3>

        {activity1.map(timeline => {
            if (timeline.id === 2) {
                change = true;
            }
           return (
            <Card className={change ? classes.cardlast : classes.card}>
            
            <CardContent style={{padding: "18px"}} className="content1">
            <Typography style={{fontSize: "18px", color: "white"}} component="h5" variant="h5">
             {timeline.starttime}
             </Typography>
             <Typography style={{lineHeight: "16px", color: change ? "white" : "#bbbdc0"}} variant="subtitle2" color="textSecondary">
              {timeline.endtime}
            </Typography>
            </CardContent>
            <div className={classes.divider}>
            <Divider orientation="vertical" style={{backgroundColor: change ? null : "#383938", width: "1px"}} />
            </div>
            <CardContent style={{padding: "18px"}} className="content2">
            <Typography style={{fontSize: "18px", color: "white"}} component="h5" variant="h5">
            {timeline.event}
            </Typography>
            <Typography style={{lineHeight: "16px", color: change ? "white" : "#bbbdc0"}} variant="subtitle2" color="textSecondary">
             {timeline.type}
            </Typography>
            </CardContent>
        
    </Card>
           );
        })}
        </div>

        <div className={classes.root}>
        <h3>September, 17</h3>

        {activity2.map(timeline => {
            
           return (
            <Card className={classes.card}>
            
            <CardContent style={{padding: "18px"}} className="content1">
            <Typography style={{fontSize: "18px", color: "white"}} component="h5" variant="h5">
             {timeline.starttime}
             </Typography>
             <Typography style={{lineHeight: "16px", color: "#bbbdc0"}} variant="subtitle2" color="textSecondary">
              {timeline.endtime}
            </Typography>
            </CardContent>
            <div className={classes.divider}>
            <Divider orientation="vertical" style={{backgroundColor: "#383938", width: "1px"}} />
            </div>
            <CardContent style={{padding: "18px"}} className="content2">
            <Typography style={{fontSize: "18px", color: "white"}} component="h5" variant="h5">
            {timeline.event}
            </Typography>
            <Typography style={{lineHeight: "16px", color: "#bbbdc0"}} variant="subtitle2" color="textSecondary">
             {timeline.type}
            </Typography>
            </CardContent>
        
    </Card>
           );
        })}
        </div>

        <div className={classes.root}>
        <h3>September, 18</h3>

        {activity3.map(timeline => {
            
           return (
            <Card className={classes.card}>
            
            <CardContent style={{padding: "18px"}} className="content1">
            <Typography style={{fontSize: "18px", color: "white"}} component="h5" variant="h5">
             {timeline.starttime}
             </Typography>
             <Typography style={{lineHeight: "16px", color: "#bbbdc0"}} variant="subtitle2" color="textSecondary">
              {timeline.endtime}
            </Typography>
            </CardContent>
            <div className={classes.divider}>
            <Divider orientation="vertical" style={{backgroundColor: "#383938", width: "1px"}} />
            </div>
            <CardContent style={{padding: "18px"}} className="content2">
            <Typography style={{fontSize: "18px", color: "white"}} component="h5" variant="h5">
            {timeline.event}
            </Typography>
            <Typography style={{lineHeight: "16px", color: "#bbbdc0"}} variant="subtitle2" color="textSecondary">
             {timeline.type}
            </Typography>
            </CardContent>
        
    </Card>
           );
        })}
        </div>

        </div>
    );
}

export default ListColumn;