import React from 'react';
import NavigationBar from './NavigationBar';
import Header from './header/Header';
import Footer from './footer/Footer';
import CateList from './sidebar/CateList';
require('style-loader!../../assets/css/style.css');
require('style-loader!../../assets/css/custom.css');

require("script-loader!../../assets/js/jquery.min.js");
require("script-loader!../../assets/jquery-ui/jquery-ui.min.js");

    // <script src="~/lib/mustache/mustache.js"></script>
    // <script src="~/lib/jquery-validation/dist/jquery.validate.js"></script>
    // <script src="~/lib/jquery-validation/dist/additional-methods.js"></script>
    // <script src="~/Assets/client/js/controllers/shoppingCart.js"></script>
    
require("script-loader!../../assets/js/common.js");

class App extends React.Component{
    render(){
        return (
            <div id="root">
                <Header/>
                    <div className="container">
                        {this.props.children}
                        <CateList/>
                        
                    </div>
                <Footer/>
                 
            </div>
        );
    };
}

export default App;