import React from 'react';
import Slider from './home_slider/Slider';
import FeaturedProductContainer from './home_product/FeaturedProductContainer';
class Home extends React.Component{
    render(){
        return (
            <div className="shoes-grid">
               {/*<Slider/>*/}
               <FeaturedProductContainer/>
            </div>
        );
    }
}

export default Home;