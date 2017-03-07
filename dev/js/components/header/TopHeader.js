import React from 'react';
import {Link} from 'react-router';
export default () => {
    return (
        <div className="top-header">
            <div className="container">
            <div className="top-header-left">
                <ul className="support">
                    <li><a href="#"><label> </label></a></li>
                    <li><a href="#">24x7 live<span className="live"> support</span></a></li>
                </ul>
                <ul className="support">
                    <li className="van"><a href="#"><label> </label></a></li>
                    <li><a href="#">Free shipping <span className="live">on order over 500</span></a></li>
                </ul>
                <ul className="support">
                    <li><a href="/gioi-thieu.html">About Us</a></li>
                </ul>
                <ul className="support">
                    <li><a href="/lien-he.html">Contact</a></li>
                </ul>
                <div className="clearfix"> </div>
            </div>
            <div className="top-header-right">
                <div className="down-top">
                    <select className="in-drop">
                        <option value="English" className="in-of">English</option>
                        <option value="Japanese" className="in-of">Japanese</option>
                        <option value="French" className="in-of">French</option>
                        <option value="German" className="in-of">German</option>
                    </select>
                </div>
                <div className="down-top top-down">
                    <select className="in-drop">

                        <option value="Dollar" className="in-of">Dollar</option>
                        <option value="Yen" className="in-of">Yen</option>
                        <option value="Euro" className="in-of">Euro</option>
                    </select>
                </div>
                
                <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
    );
}
