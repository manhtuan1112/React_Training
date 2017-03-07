import React from 'react';
import {Link} from 'react-router';
export default () => {
    return (
    <div className="footer-top">
        <div className="container">
            <div className="latter">
                <h6>Subscribe</h6>
                <div className="sub-left-right">
                    <form>
                        <input type="text" placeholder="Enter your email here" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="latter-right">
                <p>Follow Us</p>
                <ul className="face-in-to">
                    <li><a href="#"><span> </span></a></li>
                    <li><a href="#"><span className="facebook-in"> </span></a></li>
                    <div className="clearfix"> </div>
                </ul>
                <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
    );
}
