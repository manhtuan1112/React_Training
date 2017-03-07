import React,{Component} from 'react';
import {Link} from 'react-router';
require("script-loader!../../../assets/js/jquery.wmuSlider.js");
class Slider extends React.Component{ 
    
    componentDidMount(){
    var embedCode = "<script>$('.example1').wmuSlider();</script>";
    $('.wmuSlider').append(embedCode);
    }

     render(){
        return (
            
                <div className="wrap-in">
                    <div className="wmuSlider example1 slide-grid">		
                        <div className="wmuSliderWrapper">	
                            <article style={{position: 'absolute', width:'100%', opacity:'0'}}>					
                            <div className="banner-matter">
                            <div className="col-md-5 banner-bag">
                                <img className="img-responsive " src="../../assets/images/bag.jpg" alt=" " />
                                </div>
                                <div className="col-md-7 banner-off">							
                                    <h2>FLAT 50% 0FF</h2>
                                    <label>FOR ALL PURCHASE <b>VALUE</b></label>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>					
                                    <a href="#"><span className="on-get">GET NOW</span></a>
                                </div>
                                
                                <div className="clearfix"> </div>
                            </div>
                            
                            </article>
                            <article style={{position: 'absolute', width:'100%', opacity:'0'}}>					
						<div className="banner-matter">
						<div className="col-md-5 banner-bag">
							<img className="img-responsive " src="../../assets/images/bag1.jpg" alt=" " />
							</div>
							<div className="col-md-7 banner-off">							
								<h2>FLAT 50% 0FF</h2>
								<label>FOR ALL PURCHASE <b>VALUE</b></label>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>					
								<span className="on-get">GET NOW</span>
							</div>
							
							<div className="clearfix"> </div>
						</div>
						
					 	</article>
					 	 <article style={{position: 'absolute', width:'100%', opacity:'0'}}>	
						<div className="banner-matter">
						<div className="col-md-5 banner-bag">
							<img className="img-responsive " src="../../assets/images/bag.jpg" alt=" " />
							</div>
							<div className="col-md-7 banner-off">							
								<h2>FLAT 50% 0FF</h2>
								<label>FOR ALL PURCHASE <b>VALUE</b></label>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>					
								<span className="on-get">GET NOW</span>
							</div>
							
							<div className="clearfix"> </div>
						</div>
						
					 	</article>
                        </div>
                        <ul className="wmuSliderPagination">
                            <li><a href="#" className="">0</a></li>
                            <li><a href="#" className="">1</a></li>
                            <li><a href="#" className="">2</a></li>
                        </ul>
                    </div>
                </div>
        
        );
    }
}
export default Slider;
