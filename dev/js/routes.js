import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/signup/LoginPage';
import ProductByCate from './components/product/ProductByCate';
import ProductDetail from './components/product/ProductDetail';
import CartContainer from './components/shopping_cart/CartContainer';
import ThankYou from './components/shopping_cart/ThankYou';
export default (
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="signup"  component={SignupPage} />
        <Route path="login"  component={LoginPage} />
        <Route path="productbycate/:id" component={ProductByCate} />
        <Route path="productdetail/:id" component={ProductDetail} />
        <Route path="shoppingcart" component={CartContainer} />
        <Route path="thankyou" component={ThankYou}/>
    </Route>
)