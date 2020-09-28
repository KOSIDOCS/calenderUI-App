import React from "react";
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import allNews from "../news";


function SecondColumn() {

    

       return (
        <div className="SecondColumn">
        <h1>Calendar</h1>
        <div className="secondtop">
            <h2>September, 2020</h2>
            <Fab size="small" style={{marginRight: "30px", backgroundColor: "#2c3542", color: "#ef9028"}}> <ArrowBackIosIcon fontSize="small" /> </Fab>
            <Fab size="small" style={{backgroundColor: "#2c3542", color: "#ef9028"}}> <ArrowForwardIosIcon fontSize="small" /> </Fab>
        </div>
        <div className="label">
        
        <Fab variant="extended"
          size="medium"
          style={{width: "170px", backgroundColor: "#2c3542", color: "white", textTransform: "capitalize"}}
          aria-label="select"> Week </Fab>

          <Fab variant="extended"
          size="medium"
          style={{width: "192px", position: "relative", right: "40px", backgroundColor: "#ef9028", textTransform: "capitalize", boxShadow: "0px 1px 30px -7px #ef9028"}}
          aria-label="select"> Month </Fab>
        </div>

        <div className="days">
            <h5>Mon</h5>
            <h5>Tue</h5>
            <h5>Wed</h5>
            <h5>Thu</h5>
            <h5>Fri</h5>
            <h5>Sat</h5>
            <h5>Sun</h5>
        </div>

        <div className="daysnum">

            <div className="firstdays">
                
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
                <h1>4</h1>
                <h1>5</h1>
            </div>

            <div className="sec">

                <h1>6</h1>
                <h1>7</h1>
                <h1>8</h1>
                <h1>9</h1>
                <h1>10</h1>
                <h1>11</h1>
                <h1>12</h1>
            </div>

            <div className="seconddays">

                <h1>13</h1>
                <h1>14</h1>
                <h1>15</h1>
                <h1 className="select"><span>16</span></h1>
                <h1>17</h1>
                <h1>18</h1>
                <h1>19</h1>
            </div>

            <div className="seconddays">

                <h1>20</h1>
                <h1>21</h1>
                <h1>22</h1>
                <h1>23</h1>
                <h1>24</h1>
                <h1>25</h1>
                <h1>26</h1>
            </div>

            <div className="seconddays">
            
                <h1>27</h1>
                <h1>28</h1>
                <h1>29</h1>
                <h1>30</h1>
            </div> 

        </div>
        <Divider style={{backgroundColor: "#383938", width: "100%", marginTop: "10px"}}/>
        <div className="news">
        <h4>News & Blogs</h4>
        <h5>See More</h5>
        </div>

        <div className="listnews">

        {allNews.map((news) => {
            return (
        <div className="newsitem" key={news.id}>
        <picture>
            <img src={news.img} alt="img"/>
        </picture>
         <div className="description">
             <p>{news.heading}</p>
             <p>{news.time}</p>
         </div>
        </div>
            );
        })}

        </div>
        </div>
    );
}

export default SecondColumn;