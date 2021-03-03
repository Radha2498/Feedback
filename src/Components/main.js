import React from 'react';
import '../Style/mystyle.css';
import ok from '../images/ok.png';
import good from '../images/happy.jpg';
import terrible from '../images/notgood.jpg';
import bad from '../images/bad.png';
import great from '../images/great.jpg';


class main extends React.Component{
    render( ){
        return(
            <div>
                <div class="rating">
                    <input type ="radio" name="star" id="star1"></input>
                        <label for ="star1" >
                        <img src= {ok} className="image-1" width="150px" height="150px" />
                        <h4>Okay</h4>
                        </label>

                        <input type ="radio" name="star" id= "star2" ></input>
                        <label for="star2">
                        <img src= {good} className="image-1" width="150px" height="150px"   />
                        <h4>Good</h4>
                        </label>

                        <input type ="radio" name="star" id= "star3"></input>
                        <label for="star3">
                        <img src= {terrible} className="image-1" width="136px" height="150px" style={{marginLeft: '-14px'}}  />
                        <h4>Terrible</h4>
                        </label>

                        <input type ="radio" name="star" id= "star4"></input>
                        <label for="star4">
                        <img src= {bad} className="image-1" width="150px" height="150px" />
                        <h4>Bad</h4>
                        </label>

                        <input type ="radio" name="star" id= "star5"></input>
                        <label for="star5">
                        <img src= {great} className="image-1" width="150px" height="150px"  />
                        <h4>Great</h4>
                        </label>
                        <h2 class="text">How was the help you received?</h2>
                  
                </div>
            </div>
        )
    }
}

export default main;

