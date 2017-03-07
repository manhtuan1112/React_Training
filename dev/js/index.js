import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore'; 
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import {loadCategories} from './actions/categoryActions';
import {loadAllProducts} from './actions/productActions';
import {logOut} from './actions/signupActions';
import {resetCartSuccess} from './actions/cartActions';
import {saveState} from './store/localStorage';
import throttle from 'lodash/throttle';

const store = configureStore();
store.subscribe(throttle(()=>{
    saveState({
        account:store.getState().account,
        carts:store.getState().carts
    });
},1000));

var refreshAccountState={username:'',token:'',id:''};
var refreshCartsState=[];
setInterval(()=>{
    if(store.getState().account.username!="" && store.getState().account.token!="")
    {
        store.dispatch((logOut(refreshAccountState)));
    }
    if(store.getState().carts.length>0){
        store.dispatch(resetCartSuccess(refreshCartsState));
    }
},3600000);



// store.dispatch(loadCategories());
store.dispatch(loadAllProducts());
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    ,document.getElementById('app')
        
    );